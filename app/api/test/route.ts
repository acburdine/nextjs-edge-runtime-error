import { test } from "~/lib/crypto";

export async function GET() {
  return Response.json({ success: await test() }); 
}
