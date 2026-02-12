import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "K Tirumala Achari – Full Stack Developer ",
  description:
    "K Tirumala Achari is a Full Stack Developer from Berhampur, Odisha, and a 2026 Computer Science graduate at NIST University. He builds scalable, clean, and responsive web applications using React, Next.js, Node.js, Express.js, MongoDB, and TypeScript, with a strong foundation in Java and Data Structures & Algorithms.",
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
  metadataBase: new URL("https://ktirumalaachari.vercel.app/"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "K Tirumala Achari – Full Stack Developer | React, Node, MongoDB",
    description:
      "Explore the portfolio of K Tirumala Achari, a Full Stack Developer skilled in MERN stack, TypeScript, Java, and more. Based in Odisha, India – building modern web apps with React, Node.js, and MongoDB.",
    url: "https://ktirumalaachari.vercel.app/",
    siteName: "K Tirumala Achari",
    images: [
      {
        url: "/Tirumala/1759564895712.jpg",
        width: 600,
        height: 600,
      },
      {
        url: "/Tirumala/logo.jpg",
        width: 500,
        height: 600,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
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
    title: "K Tirumala AChari – Full Stack Developer | React & Node.js",
    description:
      "K Tirumala AChari is a Full Stack Web Developer from Odisha, India. Skilled in JavaScript, React, Node.js, MongoDB, NestJS, and more. Visit portfolio to know more.",
    siteId: "",
    creator: "@K Tirumala AChari",
    creatorId: "@K Tirumala AChari",
    images: ["/Tirumala/logo.jpg"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    // other: {
    //   me: ['my-email', 'my-link'],
    // },
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
