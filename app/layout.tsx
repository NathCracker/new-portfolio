import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <-- 1. Import the Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathaniel Faa | Full-Stack Engineer", // Updated with your name
  description: "Portfolio of Nathaniel Faa, a Full-Stack Engineer specializing in secure web applications, data analytics, and scalable infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}> {/* <-- Added flex and min-h-screen here */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          
          {/* Main content area grows to push the footer down if the page is short */}
          <div className="pt-16 flex-grow"> 
            {children}
          </div>

          <Footer /> {/* <-- 2. Add the Footer here */}
        </ThemeProvider>
      </body>
    </html>
  );
}