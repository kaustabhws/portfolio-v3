import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const maven = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Kaustabh Mahanta - Portfolio",
  description:
    "Transforming digital landscapes with innovative web development solutions. Kaustabh Mahanta, a skilled full-stack web developer, specializes in creating responsive and user-centric websites. Explore a diverse portfolio of projects, showcasing expertise in HTML5, CSS3, JavaScript, React, Next.js, Node.js, and various database systems. Collaborate on building extraordinary online experiences. Let's turn your vision into a seamless reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body className={maven.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
