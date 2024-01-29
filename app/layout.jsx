import { Toaster } from "react-hot-toast";
import "./globals.css";
import MainContextProvider from "@/context/MainContextProvider";
import SessionContextProvider from "@/context/SessionContextProvider";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import ProgressLoadPage from "@/components/shared/ProgressLoadPage";

export const metadata = {
  title: "Store Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionContextProvider>
        <MainContextProvider>
          <body>
            <div>
              <Toaster position="top-center" />
            </div>
            <div>
              <ProgressLoadPage />
            </div>
            {/* <Navbar /> */}
            <div>
              <Sidebar />
              <main className="bg-gray-100">{children}</main>
            </div>
          </body>
        </MainContextProvider>
      </SessionContextProvider>
    </html>
  );
}
