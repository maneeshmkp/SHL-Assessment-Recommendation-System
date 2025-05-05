import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "SHL Assessment Recommendation API is running",
    timestamp: new Date().toISOString(),
  })
}
