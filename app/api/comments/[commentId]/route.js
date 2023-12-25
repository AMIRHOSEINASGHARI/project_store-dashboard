import { authOptions } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { StoreShopComment } from "@/utils/models/comment";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
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
    const answer = await req.json();
    const commentId = params.commentId;

    await StoreShopComment.findOneAndUpdate({ _id: commentId }, { answer });

    return NextResponse.json(
      { msg: "Answer sent🖐", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error", success: false },
      { status: 400 }
    );
  }
}
