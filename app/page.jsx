import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardPage from "@/components/pages/dashboard/DashboardPage";
import StoreDashboardUser from "@/utils/models/user";
import NotAllowed from "@/components/shared/NotAllowed";

const Home = async () => {
  const session = await getServerSession(authOptions);
  const currentUser = await StoreDashboardUser.findOne({
    username: session?.user?.email,
  }).select(["roll"]);

  if (!session) redirect("/login");
  if (currentUser?.roll === "USER") return <NotAllowed />;
  return <DashboardPage />;
};

export default Home;
