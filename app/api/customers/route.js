import { authOptions } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { StoreShopUser } from "@/utils/models/storeUser";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

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

  try {
    const customers = await StoreShopUser.find().select([
      "_id",
      "username",
      "displayName",
      "avatar",
      "phoneNumber",
      "address",
      "orders",
      "likes",
      "comments",
      "createdAt",
    ]);
    return NextResponse.json(
      { msg: "Fetch Succeed🖐", success: true, customers },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
