import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "I'm Daniel De Guzman, a full stack web developer from Chattanooga, TN. Let's work together.",
  title: "Daniel De Guzman | Full Stack Web Developer",
};

export default function Home() {
  return (
    <main className="grid w-full grid-cols-1 grid-rows-1">
      <Hero />
    </main>
  );
}
