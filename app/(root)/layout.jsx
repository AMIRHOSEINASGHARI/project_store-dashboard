import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const PagesLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <div className="pagesSpaces">{children}</div>
    </main>
  );
};

export default PagesLayout;
