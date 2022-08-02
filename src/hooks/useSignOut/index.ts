import { useCallback } from "react";
import { useBoolean } from "usehooks-ts";
import auth from "../../libs/auth";

export type SignOut = {
  isSignedOut: boolean;
  signOut: () => void;
};

export function useSignOut(): SignOut {
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
