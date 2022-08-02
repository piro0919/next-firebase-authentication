import useInitAuth from "hooks/useInitAuth";
import useSignIn from "hooks/useSignIn";
import useSignOut from "hooks/useSignOut";
import useUser from "hooks/useUser";
import verifyIdToken from "libs/verifyIdToken";

export * from "hooks/useInitAuth";

export * from "hooks/useSignIn";

export * from "hooks/useSignOut";

export * from "hooks/useUser";

export * from "libs/verifyIdToken";

const nextFirebaseAuthentication = {
  useInitAuth,
  useSignIn,
  useSignOut,
  useUser,
  verifyIdToken,
};

export default nextFirebaseAuthentication;
