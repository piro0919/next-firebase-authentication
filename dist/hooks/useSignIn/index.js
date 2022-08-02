"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("firebase/auth");
var auth_2 = __importDefault(require("libs/auth"));
var facebookAuthProvider_1 = __importDefault(
  require("libs/facebookAuthProvider")
);
var googleAuthProvider_1 = __importDefault(require("libs/googleAuthProvider"));
var twitterAuthProvider_1 = __importDefault(
  require("libs/twitterAuthProvider")
);
var react_1 = require("react");
function useSignIn() {
  var signInWithFacebook = (0, react_1.useCallback)(function () {
    (0,
    auth_1.signInWithRedirect)(auth_2.default, facebookAuthProvider_1.default);
  }, []);
  var signInWithGoogle = (0, react_1.useCallback)(function () {
    (0,
    auth_1.signInWithRedirect)(auth_2.default, googleAuthProvider_1.default);
  }, []);
  var signInWithTwitter = (0, react_1.useCallback)(function () {
    (0,
    auth_1.signInWithRedirect)(auth_2.default, twitterAuthProvider_1.default);
  }, []);
  return {
    signInWithFacebook: signInWithFacebook,
    signInWithGoogle: signInWithGoogle,
    signInWithTwitter: signInWithTwitter,
  };
}
exports.default = useSignIn;
//# sourceMappingURL=index.js.map
