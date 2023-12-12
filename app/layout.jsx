import { Toaster } from "react-hot-toast";
import "./globals.css";
import MainContextProvider from "@/context/MainContextProvider";
import SessionContextProvider from "@/context/SessionContextProvider";

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
            <main>{children}</main>
          </body>
        </MainContextProvider>
      </SessionContextProvider>
    </html>
  );
}
