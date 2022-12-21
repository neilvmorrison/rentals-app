import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { User } from "firebase/auth";
import useAuthState from "../hooks/useAuthState";
import { auth as firebaseAuth } from "../utils/firebase";
import { logOut } from "../utils/auth";
import { Profile } from ".prisma/client";

interface UserProviderProps {
  children: ReactNode | ReactNode[];
}

interface IUserContext {
  user: User | undefined | null;
  profile: Profile | null;
  isAuthenticated: boolean;
  logOut: () => Promise<void>;
  setProfile: (profile: Profile) => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  isAuthenticated: false,
  profile: null,
  logOut,
  setProfile: () => {},
});

export function UserProvider({ children }: UserProviderProps) {
  const firebaseAuthState = useAuthState(firebaseAuth);
  const [user, setUser] = useState<User | undefined | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log({ profile });
  useEffect(() => {
    if (firebaseAuthState[1]) return;
    if (!firebaseAuthState[1] && firebaseAuthState[0]) {
      setIsAuthenticated(true);
      setUser(firebaseAuthState[0]);
    }
    if (!firebaseAuthState[1] && !firebaseAuthState[0]) {
      setIsAuthenticated(false);
      setUser(firebaseAuthState[0]);
    }
  }, [firebaseAuthState]);

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        logOut,
        profile,
        setProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
