import Navbar from "@/components/shared/Navbar";
import NotAllowed from "@/components/shared/NotAllowed";
import Sidebar from "@/components/shared/Sidebar";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const PagesLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <main>
      <Navbar />
      <Sidebar />
      <div className="pagesSpaces">
        {session?.user?.roll === "USER" ? <NotAllowed /> : children}
      </div>
    </main>
  );
};

export default PagesLayout;
