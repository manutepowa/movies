import { NextResponse } from "next/server"

export async function GET() {
  // console.log({ request })
  return NextResponse.json({ result: "ok" })
}
