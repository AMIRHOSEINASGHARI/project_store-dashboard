import { authOptions } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { StoreShopBlog } from "@/utils/models/blog";
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

  //* CHECKING CURRENT USER ROLL
  if (session.user.roll === "USER") {
    return NextResponse.json(
      { msg: "Access Blocked!", success: false },
      { status: 400 }
    );
  }

  try {
    const form = await req.json();
    await StoreShopBlog.create({
      title: form.title,
      description: form.description,
      image: form.image,
      slug: form.slug,
      keywords: form.keywords,
    });

    return NextResponse.json(
      { msg: "Blog Created🖐", success: true },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ msg: "Server Error", success: false }, { status: 500 });
  }
}
