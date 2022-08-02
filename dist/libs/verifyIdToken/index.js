"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var firebase_admin_1 = __importDefault(require("firebase-admin"));
require("libs/admin");
var nookies_1 = require("nookies");
function verifyIdToken(_a) {
  var req = _a.req,
    res = _a.res;
  return __awaiter(this, void 0, void 0, function () {
    var _b,
      idToken,
      refreshToken,
      decodedIdToken,
      _c,
      newIdToken,
      decodedIdToken;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          (_b = (0, nookies_1.parseCookies)({ req: req })),
            (idToken = _b.idToken),
            (refreshToken = _b.refreshToken);
          _d.label = 1;
        case 1:
          _d.trys.push([1, 3, , 6]);
          return [
            4 /*yield*/,
            firebase_admin_1.default.auth().verifyIdToken(idToken),
          ];
        case 2:
          decodedIdToken = _d.sent();
          return [
            2 /*return*/,
            __assign(__assign({}, decodedIdToken), { idToken: idToken }),
          ];
        case 3:
          _c = _d.sent();
          return [
            4 /*yield*/,
            axios_1.default.post(
              "https://securetoken.googleapis.com/v1/token?key=".concat(
                process.env.NEXT_PUBLIC_FIREBASE_API_KEY
              ),
              {
                grant_type: "refresh_token",
                refresh_token: refreshToken,
              }
            ),
          ];
        case 4:
          newIdToken = _d.sent().data.id_token;
          return [
            4 /*yield*/,
            firebase_admin_1.default.auth().verifyIdToken(newIdToken),
          ];
        case 5:
          decodedIdToken = _d.sent();
          (0, nookies_1.setCookie)({ res: res }, "idToken", newIdToken, {
            maxAge: 60 * 60,
            path: "/",
            sameSite: "lax",
          });
          return [
            2 /*return*/,
            __assign(__assign({}, decodedIdToken), { idToken: newIdToken }),
          ];
        case 6:
          return [2 /*return*/];
      }
    });
  });
}
exports.default = verifyIdToken;
//# sourceMappingURL=index.js.map
