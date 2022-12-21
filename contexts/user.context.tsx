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
  loadingUser: boolean;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  isAuthenticated: false,
  profile: null,
  logOut,
  setProfile: () => {},
  loadingUser: true,
});

export function UserProvider({ children }: UserProviderProps) {
  const firebaseAuthState = useAuthState(firebaseAuth);
  const [loadingUser, setLoadingUser] = useState(firebaseAuthState[1]);
  const [user, setUser] = useState<User | undefined | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (firebaseAuthState[1]) return;
    if (!firebaseAuthState[1] && firebaseAuthState[0]) {
      setIsAuthenticated(true);
      setUser(firebaseAuthState[0]);
      setLoadingUser(firebaseAuthState[1]);
    }
    if (!firebaseAuthState[1] && !firebaseAuthState[0]) {
      setIsAuthenticated(false);
      setUser(firebaseAuthState[0]);
      setLoadingUser(firebaseAuthState[1]);
    }
  }, [firebaseAuthState]);

  useEffect(() => {
    async function fetchUserProfile(uid: string) {
      const res = await fetch(`/api/profile/me?uid=${uid}`);
      const result = await res.json();
      setProfile(result);
    }
    if (!isAuthenticated) return;
    if (user) {
      fetchUserProfile(user.uid);
    }
  }, [user, isAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        logOut,
        profile,
        setProfile,
        loadingUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
