import { Auth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect } from "react";
import useLoadingValue from "../utils/useLoadingValue";

type LoadingHook<T, E> = [T | undefined, boolean, E | undefined];

export type AuthStateHook = LoadingHook<User | null, Error>;

type AuthStateOptions = {
  onUserChanged?: (user: User | null) => Promise<void>;
};

const useAuthState = (
  auth: Auth,
  options?: AuthStateOptions
): AuthStateHook => {
  const { error, loading, setError, setValue, value } = useLoadingValue<
    User | null,
    Error
  >(() => auth.currentUser);

  useEffect(() => {
    const listener = onAuthStateChanged(
      auth,
      async (user) => {
        if (options?.onUserChanged) {
          try {
            await options.onUserChanged(user);
          } catch (e) {
            setError(e as Error);
          }
        }
        setValue(user);
      },
      setError
    );

    return () => {
      listener();
    };
  }, [auth]);

  return [value, loading, error];
};

export default useAuthState;
