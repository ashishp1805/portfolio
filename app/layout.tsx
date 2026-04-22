import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/common/Navbar";
import { ScrollToTopButton } from "@/components/common/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aashish Portfolio | Full Stack Developer | MERN Stack | React & Next.js Expert",
  description:
    "Full Stack Developer specializing in MERN stack, React.js, Next.js, and scalable web applications. I build high-performance websites, SaaS platforms, and custom web solutions for startups and businesses.",

  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer Freelancer",
    "Hire Full Stack Developer",
    "SaaS Developer",
    "Custom Web Applications",
    "JavaScript Developer"
  ],

  authors: [{ name: "Aashish" }],
  creator: "Aashish",

  openGraph: {
    title: "Hire Full Stack Developer | React, Next.js, MERN Expert",
    description:
      "Experienced Full Stack Developer building scalable web apps, SaaS products, and modern websites using React, Next.js, Node.js, and MongoDB.",
    url: "https://yourdomain.com",
    siteName: "Aashish Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer | MERN, React, Next.js",
    description:
      "Building scalable, high-performance web applications for startups and businesses.",
    images: ["https://yourdomain.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarDemo />
        {children}


      </body>
    </html>
  );
}
