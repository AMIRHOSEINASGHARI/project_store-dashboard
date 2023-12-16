import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardPage from "@/components/pages/dashboard/DashboardPage";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  return <DashboardPage />;
};

export default Home;
