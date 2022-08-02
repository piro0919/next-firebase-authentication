"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        __createBinding(exports, m, p);
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var useInitAuth_1 = __importDefault(require("hooks/useInitAuth"));
var useSignIn_1 = __importDefault(require("hooks/useSignIn"));
var useSignOut_1 = __importDefault(require("hooks/useSignOut"));
var useUser_1 = __importDefault(require("hooks/useUser"));
var verifyIdToken_1 = __importDefault(require("libs/verifyIdToken"));
__exportStar(require("hooks/useInitAuth"), exports);
__exportStar(require("hooks/useSignIn"), exports);
__exportStar(require("hooks/useSignOut"), exports);
__exportStar(require("hooks/useUser"), exports);
__exportStar(require("libs/verifyIdToken"), exports);
var nextFirebaseAuthentication = {
  useInitAuth: useInitAuth_1.default,
  useSignIn: useSignIn_1.default,
  useSignOut: useSignOut_1.default,
  useUser: useUser_1.default,
  verifyIdToken: verifyIdToken_1.default,
};
exports.default = nextFirebaseAuthentication;
//# sourceMappingURL=index.js.map
