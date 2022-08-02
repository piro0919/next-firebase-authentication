"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("libs/auth"));
var auth_2 = require("react-firebase-hooks/auth");
function useUser() {
  var _a = (0, auth_2.useAuthState)(auth_1.default),
    user = _a[0],
    isLoading = _a[1],
    error = _a[2];
  return {
    error: error,
    isLoading: isLoading,
    user: user || undefined,
  };
}
exports.default = useUser;
//# sourceMappingURL=index.js.map
