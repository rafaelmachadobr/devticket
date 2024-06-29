import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevTicket",
  description: "Compre ingressos para os melhores eventos"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} flex flex-col min-h-screen items-center bg-primary text-default`}
      >
        <div className="p-4 md:p-10 w-full max-w-[1256px]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}