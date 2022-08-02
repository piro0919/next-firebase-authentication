import { getAuth } from "firebase/auth";
import app from "libs/app";

const auth = getAuth(app);

export default auth;
