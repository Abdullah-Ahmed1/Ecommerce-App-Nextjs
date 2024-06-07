import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const getToken = cookies().get("token");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);
  if (getToken)
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  return NextResponse.redirect(new URL("/home", request.url));
}
export const config = {
  matcher: ["/profile"],
};

export const handleShare = () => {
  const resultArray: any = [];
  return resultArray;
};
