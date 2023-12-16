import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardPage from "@/components/pages/dashboard/DashboardPage";
import NotAllowed from "@/components/shared/NotAllowed";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  if (session.user.roll === "USER") return <NotAllowed />;
  return <DashboardPage />;
};

export default Home;
