import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AuthForm from "@/components/auth/AuthForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <AuthForm type="login" />;
};

export default Login;
