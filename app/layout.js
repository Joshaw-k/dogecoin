import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dogecoin20 | Your Stake-to-Earn Meme Coin",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/token.svg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
