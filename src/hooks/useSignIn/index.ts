import { signInWithRedirect } from "firebase/auth";
import auth from "libs/auth";
import facebookAuthProvider from "libs/facebookAuthProvider";
import googleAuthProvider from "libs/googleAuthProvider";
import twitterAuthProvider from "libs/twitterAuthProvider";
import { useCallback } from "react";

export type SignIn = {
  signInWithFacebook: () => void;
  signInWithGoogle: () => void;
  signInWithTwitter: () => void;
};

function useSignIn(): SignIn {
  const signInWithFacebook = useCallback(() => {
    signInWithRedirect(auth, facebookAuthProvider);
  }, []);
  const signInWithGoogle = useCallback(() => {
    signInWithRedirect(auth, googleAuthProvider);
  }, []);
  const signInWithTwitter = useCallback(() => {
    signInWithRedirect(auth, twitterAuthProvider);
  }, []);

  return {
    signInWithFacebook,
    signInWithGoogle,
    signInWithTwitter,
  };
}

export default useSignIn;
