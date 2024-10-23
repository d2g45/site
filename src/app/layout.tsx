import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import Analytics from "@/components/dom/analytics";
import { META, URL } from "@/constants/global";
import "@/styles/globals.css";

const firaCode = Fira_Code({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const { title, description, openGraphImage, shortname } = META;

export const metadata: Metadata = {
  description,
  openGraph: {
    ...openGraphImage,
    description,
    title,
    type: "website",
    url: URL,
  },
  title,
  authors: [
    {
      name: shortname,
      url: URL,
    },
  ],
  keywords: [
    shortname,
    "full stack web developer",
    "chattanooga web developer",
    "web developer",
    "software engineer",
  ],
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
    <html lang="en">
      <body
        className={`${firaCode.variable} bg-zinc-300 font-mono text-zinc-800 antialiased dark:bg-zinc-800 dark:text-zinc-300`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
