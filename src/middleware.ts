import fetchAdapter from "@vespaiach/axios-fetch-adapter";
import axios, { AxiosResponse } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { VerifyIdTokenData } from "pages/api/verifyIdToken";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const response = NextResponse.next();
  const idToken = request.cookies.get("idToken");
  const refreshToken = request.cookies.get("refreshToken");
  const axiosInstance = axios.create({
    adapter: fetchAdapter,
  });

  try {
    const {
      data: { idToken: newIdToken },
    } = await axiosInstance.get<
      VerifyIdTokenData,
      AxiosResponse<VerifyIdTokenData>
    >(`${request.nextUrl.origin}/api/verifyIdToken`, {
      headers: {
        cookie: `idToken=${idToken}; refreshToken=${refreshToken}`,
      },
    });

    response.cookies.set("idToken", newIdToken, {
      maxAge: 60 * 60,
      path: "/",
      sameSite: "lax",
    });

    return response;
  } catch {
    return NextResponse.redirect(`${request.nextUrl.origin}/signin`);
  }
}

export const config = {
  matcher: "/verify-by-middleware",
};
