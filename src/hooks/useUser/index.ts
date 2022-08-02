import { User as AuthUser } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../libs/auth";

export type User = {
  error?: Error;
  isLoading: boolean;
  user?: AuthUser;
};

export function useUser(): User {
  const [user, isLoading, error] = useAuthState(auth);

  return {
    error,
    isLoading,
    user: user || undefined,
  };
}

export default useUser;
