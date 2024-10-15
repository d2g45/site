import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";
import cx from "classnames";

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
  const className = cx(firaCode.variable);
  return (
    <html lang="en">
      <body
        className={`${className} bg-zinc-300 font-mono text-zinc-800 antialiased dark:bg-zinc-800 dark:text-zinc-300`}
      >
        {children}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
