//External imports
import type { Metadata } from "next";
//Internal imports
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { HeaderNavItems, indexMetadata } from "@/data/website-data";
import Header from "@/components/Header";
import Description from "@/components/Description";

export const metadata: Metadata = indexMetadata;

export default async function Home() {
  return (
    <>
      <Header defaultActiveSection={HeaderNavItems.Home} />
      <Hero />
      <main id="main">
        <Description />
        <Contact />
      </main>
    </>
  );
}
