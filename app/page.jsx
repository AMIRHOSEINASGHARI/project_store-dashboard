import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import HomePage from "@/components/pages/home/HomePage";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  return <HomePage />;
};

export default Home;
