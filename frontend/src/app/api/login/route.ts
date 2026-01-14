import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const backendRes = await fetch(`${process.env.BACKEND_URI}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await backendRes.json();

    // Handle Invalid Credentials (401) vs Generic Error
    if (backendRes.status === 401) {
       return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    if (!backendRes.ok) {
      return NextResponse.json(
        { error: data.error || "Login failed" },
        { status: backendRes.status }
      );
    }

    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
