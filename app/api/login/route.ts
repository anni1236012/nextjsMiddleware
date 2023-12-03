import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const response = NextResponse.json(
    { success: true },
    { status: 200, headers: { "content-type": "application/json" } }
  );
  response.cookies.set({
    name: "sessionToken",
    value: "loggedin",
    path: "/",
  });
  return response;
}
