import { authOptions } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import StoreDashboardUser from "@/utils/models/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

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

  const form = await req.json();
  console.log(form);
  const username = session?.user?.username;

  try {
    const userInfo = await StoreDashboardUser.findOne({ username });

    const updatedUser = await StoreDashboardUser.findOneAndUpdate(
      { username },
      {
        username: form.username,
        displayName: form.displayName,
        avatar: form.image || userInfo.avatar,
      }
    );
    return NextResponse.json(
      {
        msg: "Info updated🖐",
        success: true,
        newSession: {
          name: updatedUser.displayName,
          username: updatedUser.username,
          image: updatedUser.avatar,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
