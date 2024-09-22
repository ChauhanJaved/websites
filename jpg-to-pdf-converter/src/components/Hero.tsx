//External  imports
import Image from "next/image";

//Internal imports
import { montserrat, nunito } from "@/components/font/font";
import Button from "./UI/Button";
import {
  HeaderNavItems,
  headerNavItems,
  heroDesc,
  heroTitle,
  portfolioItem,
} from "@/data/website-data";
import HeroIcons, { IconNames } from "./UI/HeroIcons";
import SectionHeader from "./UI/SectionHeader";

const Hero = () => {
  return (
    <section
      id={HeaderNavItems.Home}
      className="container mx-auto mt-[80px] flex flex-col items-center justify-center px-3 py-10 xl:max-w-screen-xl"
    >
      <SectionHeader
        caption={portfolioItem.title}
        desc={
          portfolioItem.desc
            ? portfolioItem.desc
            : "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial"
        }
      />
      <Button
        caption="Download Now"
        link={portfolioItem.downloadLink}
        icon={IconNames.ArrowDownTray}
        className="mt-10"
      />
      <div className="mt-10 flex w-full flex-col md:flex-row">
        {/* ----- Box-1 ----- */}
        <div className="flex w-full flex-col items-center md:w-2/3">
          <Image
            src={portfolioItem.src}
            width={portfolioItem.width}
            height={portfolioItem.height}
            alt={portfolioItem.title}
            className="relative"
            priority
          />
        </div>
        {/* ----- Box-2 ----- */}
        <div className="mt-5 md:ml-3 md:mt-0 md:w-1/3">
          <div className="flex flex-col text-center">
            {portfolioItem.features.map((item, index) => (
              <div key={index} className="mb-3 flex w-full flex-col">
                <div className="flex flex-row items-center">
                  <HeroIcons
                    iconName={IconNames.CheckCircle}
                    className="h-9 w-9 flex-none text-blue-ultramarine"
                  />

                  <div className="flex flex-grow flex-col pl-3 text-left">
                    <h2 className={`${montserrat.className} font-bold`}>
                      {item}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
