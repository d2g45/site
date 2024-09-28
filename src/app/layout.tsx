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

const title = "Daniel De Guzman | Full Stack Web Developer";
const description =
  "I'm Daniel De Guzman, a full stack web developer from Chattanooga, TN. Let's work together.";

export const metadata: Metadata = {
  description,
  openGraph: {
    description,
    title,
  },
  title,
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
