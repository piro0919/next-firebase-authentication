"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("firebase/auth");
var useUser_1 = __importDefault(require("hooks/useUser"));
var auth_2 = __importDefault(require("libs/auth"));
var nookies_1 = require("nookies");
var react_1 = require("react");
var usehooks_ts_1 = require("usehooks-ts");
function useInitAuth() {
  var user = (0, useUser_1.default)().user;
  var _a = (0, react_1.useState)(),
    userCredential = _a[0],
    setUserCredential = _a[1];
  var _b = (0, usehooks_ts_1.useBoolean)(),
    setIsSignedIn = _b.setValue,
    isSignedIn = _b.value;
  (0, react_1.useEffect)(
    function () {
      if (user) {
        user.getIdToken().then(function (idToken) {
          var refreshToken = user.refreshToken;
          (0, nookies_1.setCookie)(null, "idToken", idToken, {
            maxAge: 60 * 60,
            path: "/",
            sameSite: "lax",
          });
          (0, nookies_1.setCookie)(null, "refreshToken", refreshToken, {
            maxAge: 60 * 60 * 24 * 365,
            path: "/",
            sameSite: "lax",
          });
        });
        return;
      }
      (0, nookies_1.destroyCookie)(null, "idToken", { path: "/" });
      (0, nookies_1.destroyCookie)(null, "refreshToken", { path: "/" });
    },
    [user]
  );
  (0, react_1.useEffect)(function () {
    (0, auth_1.getRedirectResult)(auth_2.default).then(function (
      userCredential
    ) {
      setUserCredential(userCredential || undefined);
    });
  }, []);
  (0, react_1.useEffect)(
    function () {
      setIsSignedIn(!!user && !!userCredential);
    },
    [setIsSignedIn, user, userCredential]
  );
  return {
    isSignedIn: isSignedIn,
    userCredential: userCredential,
  };
}
exports.default = useInitAuth;
//# sourceMappingURL=index.js.map
