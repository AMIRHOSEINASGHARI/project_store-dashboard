import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Store Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Toaster position="top-center" />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
