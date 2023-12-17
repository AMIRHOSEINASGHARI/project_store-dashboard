import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import StoreDashboardUser from "@/utils/models/user";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";

export async function GET() {
  try {
    await connectDB();
  } catch (error) {
    console.log("Cannot connect to DB!", error);
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }

  const session = await getServerSession(authOptions);

  //* CHECKING SESSION
  if (!session) {
    return NextResponse.json(
      { msg: "Unauthorized!", success: false },
      { status: 404 }
    );
  }

  //* CHECKING CURRENT USER ROLL
  if (session.user.roll === "USER") {
    return NextResponse.json(
      { msg: "Access Blocked!", success: false },
      { status: 400 }
    );
  }

  //* TRY TO FETCHING DATA FROM DB
  try {
    const users = await StoreDashboardUser.find().select([
      "_id",
      "username",
      "displayName",
      "avatar",
      "roll",
      "createdAt",
    ]);

    const filteredUsers = users.filter(
      (user) => user.username !== session.user.username
    );

    return NextResponse.json(
      { msg: "Fetch Succeed", success: true, users: filteredUsers },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
  } catch (error) {
    console.log("Cannot connect to DB!", error);
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }

  const session = await getServerSession(authOptions);

  //* CHECKING SESSION
  if (!session) {
    return NextResponse.json(
      { msg: "Unauthorized!", success: false },
      { status: 404 }
    );
  }

  //* CHECKING CURRENT USER ROLL
  if (session.user.roll === "USER") {
    return NextResponse.json(
      { msg: "Access Blocked!", success: false },
      { status: 400 }
    );
  }

  try {
    const body = await req.json();
    const { username, actionType } = body;

    if (actionType === "set-as-co-admin") {
      await StoreDashboardUser.findOneAndUpdate(
        { username },
        { roll: "Co-Admin" }
      );
      return NextResponse.json(
        { msg: "Done🖐", success: true },
        { status: 200 }
      );
    }

    if (actionType === "set-as-user") {
      await StoreDashboardUser.findOneAndUpdate({ username }, { roll: "USER" });
      return NextResponse.json(
        { msg: "Done🖐", success: true },
        { status: 200 }
      );
    }

    if (actionType === "delete-user") {
      await StoreDashboardUser.findOneAndDelete({ username });
      return NextResponse.json(
        { msg: "Done🖐", success: true },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
