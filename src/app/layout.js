import "./globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: '300' });

export const metadata = {
  title: "recuppa",
  description: "Sip. Return. Repeat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} text-recuppadark`}>{children}</body>
    </html>
  );
}
