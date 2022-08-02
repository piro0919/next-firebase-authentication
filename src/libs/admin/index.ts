import admin from "firebase-admin";
import { cert, initializeApp } from "firebase-admin/app";

if (!admin.apps.length) {
  initializeApp({
    credential: cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || "").replace(
        /\\n/gm,
        "\n"
      ),
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
  });
}

export default admin;
