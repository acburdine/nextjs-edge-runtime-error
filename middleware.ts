import { NextResponse } from "next/server";
import { test } from "./lib/crypto";

export const config = {
  matcher: "/test/sign.json",
};

export default async function middleware() {
  return NextResponse.json({
    success: await test(),
  });
}
