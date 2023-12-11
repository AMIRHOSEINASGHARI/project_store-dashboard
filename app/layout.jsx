import "./globals.css";

export const metadata = {
  title: "Store Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
