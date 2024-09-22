import { portfolioItem } from "@/data/website-data";

export default function Description() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center px-3 xl:max-w-screen-xl">
      {portfolioItem.description}
    </section>
  );
}
