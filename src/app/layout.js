import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh Santoshi Portfolio Website",
  description: "It is the Portfolio Website of Harsh Santoshi, student at DTU pursuing B.Tech in Software Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
