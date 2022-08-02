"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("firebase/auth");
var app_1 = __importDefault(require("libs/app"));
var auth = (0, auth_1.getAuth)(app_1.default);
exports.default = auth;
//# sourceMappingURL=index.js.map
