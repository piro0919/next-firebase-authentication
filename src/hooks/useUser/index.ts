import { User as AuthUser } from "firebase/auth";
import auth from "libs/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export type User = {
  error?: Error;
  isLoading: boolean;
  user?: AuthUser;
};

function useUser(): User {
  const [user, isLoading, error] = useAuthState(auth);

  return {
    error,
    isLoading,
    user: user || undefined,
  };
}

export default useUser;
