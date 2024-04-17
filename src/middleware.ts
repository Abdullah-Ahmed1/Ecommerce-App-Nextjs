import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const getToken = cookies().get("token");
  if (getToken) return NextResponse.next();
  return NextResponse.redirect(new URL("/home", request.url));
}
export const config = {
  matcher: ["/profile"],
};

export const handleShare = () => {
  const resultArray: any = [];
  return resultArray;
};
