import { ParsedUrlQuery } from "querystring";
import axios from "axios";
import admin from "firebase-admin";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import "libs/admin";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
  PreviewData,
} from "next";
import { parseCookies, setCookie } from "nookies";

export type VerifyIdTokenArgs =
  | GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
  | {
      req: NextApiRequest;
      res: NextApiResponse;
    };

export type VerifyIdToken = DecodedIdToken & {
  idToken: string;
};

async function verifyIdToken({
  req,
  res,
}: VerifyIdTokenArgs): Promise<VerifyIdToken> {
  const { idToken, refreshToken } = parseCookies({ req });

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);

    return { ...decodedIdToken, idToken };
  } catch {
    const {
      data: { id_token: newIdToken },
    } = await axios.post(
      `https://securetoken.googleapis.com/v1/token?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }
    );
    const decodedIdToken = await admin.auth().verifyIdToken(newIdToken);

    setCookie({ res }, "idToken", newIdToken, {
      maxAge: 60 * 60,
      path: "/",
      sameSite: "lax",
    });

    return { ...decodedIdToken, idToken: newIdToken };
  }
}

export default verifyIdToken;
