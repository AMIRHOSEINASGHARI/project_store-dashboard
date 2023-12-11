import connectDB from "@/utils/connectDB";
import StoreDashboardUser from "@/utils/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  try {
    await connectDB();
  } catch (error) {
    console.log("Cannot connect to DB!", error);
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }

  try {
    const isUser = await StoreDashboardUser.findOne({
      username: body.username,
    });

    if (isUser)
      return NextResponse.json(
        { msg: "Username exists! Pick another one", success: false },
        { status: 402 }
      );
  } catch (error) {
    console.log("Cannot create user at this time!", error);
    return NextResponse.json(
      { msg: "Cannot create user at this time!", success: false },
      { status: 500 }
    );
  }

  try {
    const newUser = await StoreDashboardUser.create({
      username: body.username,
      displayName: body.displayName,
      password: body.password,
    });

    return NextResponse.json(
      { msg: "User created", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.log("Cannot create user at this time!", error);
    return NextResponse.json(
      { msg: "Cannot create user at this time!", success: false },
      { status: 500 }
    );
  }
}
