import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import StoreDashboardUser from "@/utils/models/user";

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

    return NextResponse.json(
      { msg: "Fetch Succeed", success: true, users },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
