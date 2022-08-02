"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("libs/auth"));
var react_1 = require("react");
var usehooks_ts_1 = require("usehooks-ts");
function useSignOut() {
  var _a = (0, usehooks_ts_1.useBoolean)(),
    onIsSignedOut = _a.setTrue,
    isSignedOut = _a.value;
  var signOut = (0, react_1.useCallback)(
    function () {
      auth_1.default.signOut().then(function () {
        onIsSignedOut();
      });
    },
    [onIsSignedOut]
  );
  return {
    isSignedOut: isSignedOut,
    signOut: signOut,
  };
}
exports.default = useSignOut;
//# sourceMappingURL=index.js.map
