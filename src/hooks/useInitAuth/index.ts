import { getRedirectResult, UserCredential } from "firebase/auth";
import { setCookie, destroyCookie } from "nookies";
import { useEffect, useMemo, useState } from "react";
import auth from "../../libs/auth";
import useUser from "../useUser";

export type InitAuth = {
  isSignedIn: boolean;
  userCredential?: UserCredential;
};

export function useInitAuth(): InitAuth {
  const { isLoading, user } = useUser();
  const [userCredential, setUserCredential] = useState<UserCredential>();
  const isSignedIn = useMemo(
    () => !!user && !!userCredential,
    [user, userCredential]
  );

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (user) {
      user.getIdToken().then((idToken) => {
        const { refreshToken } = user;

        setCookie(null, "idToken", idToken, {
          maxAge: 60 * 60,
          path: "/",
          sameSite: "lax",
        });
        setCookie(null, "refreshToken", refreshToken, {
          maxAge: 60 * 60 * 24 * 365,
          path: "/",
          sameSite: "lax",
        });
      });

      return;
    }

    destroyCookie(null, "idToken", { path: "/" });
    destroyCookie(null, "refreshToken", { path: "/" });
  }, [isLoading, user]);

  useEffect(() => {
    getRedirectResult(auth).then((userCredential) => {
      setUserCredential(userCredential || undefined);
    });
  }, []);

  return {
    isSignedIn,
    userCredential,
  };
}

export default useInitAuth;
