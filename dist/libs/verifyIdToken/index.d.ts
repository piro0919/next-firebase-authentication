/// <reference types="node" />
import { ParsedUrlQuery } from "querystring";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import "libs/admin";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
  PreviewData,
} from "next";
export declare type VerifyIdTokenArgs =
  | GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
  | {
      req: NextApiRequest;
      res: NextApiResponse;
    };
export declare type VerifyIdToken = DecodedIdToken & {
  idToken: string;
};
declare function verifyIdToken({
  req,
  res,
}: VerifyIdTokenArgs): Promise<VerifyIdToken>;
export default verifyIdToken;
//# sourceMappingURL=index.d.ts.map
