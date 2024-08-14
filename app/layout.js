import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce Task",
  description: "REPLIQ Junior Frontend Developer Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full xl:w-2/3 mx-auto`}>
        <Toaster />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
