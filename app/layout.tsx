import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ReduxProvider from "@/store/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlyToday",
  description: "FlyToday Entrance Task",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
