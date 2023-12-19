import { authOptions } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { StoreDashboardProduct } from "@/utils/models/product";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req) {
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

  const data = await req.json();
  const { stock, discount, _id } = data;
  console.log(data);

  try {
    const product = await StoreDashboardProduct.findById({ _id });

    await StoreDashboardProduct.findByIdAndUpdate(
      { _id },
      {
        stock: stock === "" ? product.stock : Number(stock) + product.stock,
        discount: discount === "" ? product.discount : discount,
      }
    );
    return NextResponse.json({ msg: "Done🖐", success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
