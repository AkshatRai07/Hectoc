import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Username, email, and password are required" },
        { status: 400 }
      );
    }

    const backendRes = await fetch(`${process.env.BACKEND_URI}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await backendRes.json();

    if (backendRes.status === 409) {
      return NextResponse.json(
        { error: "User with this email or username already exists." },
        { status: 409 }
      );
    }

    if (!backendRes.ok) {
      return NextResponse.json(
        { error: data.error || "Registration failed" },
        { status: backendRes.status }
      );
    }

    return NextResponse.json(data, { status: 201 });

  } catch (error) {
    console.error("Register API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
