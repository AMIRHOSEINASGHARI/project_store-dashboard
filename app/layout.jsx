import { Toaster } from "react-hot-toast";
import "./globals.css";
import MainContextProvider from "@/context/MainContextProvider";

export const metadata = {
  title: "Store Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MainContextProvider>
        <body>
          <div>
            <Toaster position="top-center" />
          </div>
          <main>{children}</main>
        </body>
      </MainContextProvider>
    </html>
  );
}
