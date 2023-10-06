import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.scss";

const jost = Jost({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Mateus Matos Arquitetura",
  description: "Mateus Matos Arquitetura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div className="background-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
