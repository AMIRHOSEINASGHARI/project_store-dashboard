import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");
  return <main>{children}</main>;
};

export default AuthLayout;
