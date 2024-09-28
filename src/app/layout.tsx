import type { Metadata } from "next";

import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import cx from "classnames";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  description:
    "I'm Daniel De Guzman, a full stack web developer from Chattanooga, TN. Let's work together.",
  title: "Daniel De Guzman | Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const className = cx(firaCode.variable);
  return (
    <html lang="en">
      <body className={`${className} antialiased`}>
        {children}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
