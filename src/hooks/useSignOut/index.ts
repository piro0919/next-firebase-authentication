import auth from "libs/auth";
import { useCallback } from "react";
import { useBoolean } from "usehooks-ts";

export type SignOut = {
  isSignedOut: boolean;
  signOut: () => void;
};

function useSignOut(): SignOut {
  const { setTrue: onIsSignedOut, value: isSignedOut } = useBoolean();
  const signOut = useCallback(() => {
    auth.signOut().then(() => {
      onIsSignedOut();
    });
  }, [onIsSignedOut]);

  return {
    isSignedOut,
    signOut,
  };
}

export default useSignOut;
