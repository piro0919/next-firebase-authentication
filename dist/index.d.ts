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
declare const nextFirebaseAuthentication: {
  useInitAuth: typeof useInitAuth;
  useSignIn: typeof useSignIn;
  useSignOut: typeof useSignOut;
  useUser: typeof useUser;
  verifyIdToken: typeof verifyIdToken;
};
export default nextFirebaseAuthentication;
//# sourceMappingURL=index.d.ts.map
