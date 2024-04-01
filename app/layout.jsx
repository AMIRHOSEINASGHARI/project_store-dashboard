import { Toaster } from "react-hot-toast";
import "./globals.css";
import MainContextProvider from "@/context/MainContextProvider";
import SessionContextProvider from "@/context/SessionContextProvider";
import ProgressLoadPage from "@/components/shared/ProgressLoadPage";
import ReactQueryClientProvider from "@/context/ReactQueryClientProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const metadata = {
  title: "Store Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactQueryClientProvider>
        <SessionContextProvider>
          <MainContextProvider>
            <body>
              <Toaster position="top-center" />
              {/* <ProgressLoadPage /> */}
              <main>{children}</main>
              <ReactQueryDevtools />
            </body>
          </MainContextProvider>
        </SessionContextProvider>
      </ReactQueryClientProvider>
    </html>
  );
}
