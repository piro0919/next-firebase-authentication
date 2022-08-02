"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var app_1 = require("firebase-admin/app");
if (!firebase_admin_1.default.apps.length) {
  (0, app_1.initializeApp)({
    credential: (0, app_1.cert)({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || "").replace(
        /\\n/gm,
        "\n"
      ),
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
  });
}
exports.default = firebase_admin_1.default;
//# sourceMappingURL=index.js.map
