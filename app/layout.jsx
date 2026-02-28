import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "K Tirumala Achari – Full Stack Developer",
  description:
    "K Tirumala Achari is a Full Stack Developer from Berhampur, Odisha, and a 2026 Computer Science graduate at NIST University. He builds scalable, clean, and responsive web applications using React, Next.js, Node.js, Express.js, MongoDB, and TypeScript.",
  keywords: [
    "K Tirumala Achari",
    "Full Stack Developer India",
    "MERN Stack Developer Odisha",
  ],
  authors: [
    { name: "K Tirumala Achari" },
    { name: "K Tirumala Achari", url: "https://ktirumalaachari.vercel.app/" },
  ],
  creator: "K Tirumala Achari",
  publisher: "K Tirumala Achari",
  category: "Technology",

  metadataBase: new URL("https://ktirumalaachari.vercel.app"),

  openGraph: {
    title:
      "K Tirumala Achari – Full Stack Developer | React, Node, MongoDB",
    description:
      "Explore the portfolio of K Tirumala Achari, Full Stack Developer skilled in MERN stack and modern web technologies.",
    url: "https://ktirumalaachari.vercel.app/",
    siteName: "K Tirumala Achari",
    images: [
      {
        url:
          "https://ktirumalaachari.vercel.app/Tirumala/1759564895712.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "K Tirumala Achari Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/logo.jpg",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "K Tirumala Achari – Full Stack Developer | React & Node.js",
    description:
      "Full Stack Developer portfolio showcasing projects, skills, and experience.",
    images: [
      "https://ktirumalaachari.vercel.app/Tirumala/1759564895712.jpg?v=2",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small bg-fixed bg-cover bg-center min-h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
