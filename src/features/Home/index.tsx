"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
// import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
// import { ArrowRightOutlined } from "@ant-design/icons";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

// import { contractAddress, findUsLink, socialsLink } from "@/constants/links";
// import { rubik, satoshi } from "@/utils/font";
// import { ecosystemList } from "./constants/ecosystem";
// import { roadmapList } from "./constants/roadmap";

// import { FeatureArrow } from "@/utils/Icon/arrow";

import BannerApp from "@/assets/draconis-banner.jpg";
import HeroApp from "@/assets/draconis-hero.jpg";

// import HeroApp from "@/assets/hero-app.png";
// import MapApp from "@/assets/map-app.png";
// import DextoolsLogo from "@/assets/logo-dextools.png";
// import EtherscanLogo from "@/assets/logo-etherscan.png";
import TwitterLogo from "@/assets/logo-twitter.png";
import TelegramLogo from "@/assets/logo-telegram.png";
import DexscreenerLogo from "@/assets/logo-dexscreener.png";
// import Uniswap from "@/assets/uniswap.png";
// import Solidproof from "@/assets/solidproof.png";
// import Coingecko from "@/assets/coingecko.png";

import "./style.css";
import { contractAddress, findUsLink, socialsLink } from "@/constants/links";

interface Props {}

// const introVidUrl =
//   "https://res.cloudinary.com/dwppcshmi/video/upload/f_auto:video,q_auto/v1/rabbit_images/cqf6n5ikkmjsod1jpfxl";

// const contentStyle: React.CSSProperties = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "transparent",
// };

const Home: React.FC<Props> = () => {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isTokensVisible, setIsTokensVisible] = useState(false);

  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const tokensRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();
  // const [copyContent] = useCopyText();

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsWelcomeVisible(entry.isIntersecting);
      });

      observer.observe(welcomeRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsAboutVisible(entry.isIntersecting);
      });

      observer.observe(aboutRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsTokensVisible(entry.isIntersecting);
  //     });

  //     observer.observe(tokensRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="homepage-container">
        <YinLoader />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <div id="welcome" />
      <div ref={welcomeRef} className="w-full h-full relative">
        <Image
          src={BannerApp}
          alt="pelu-banner"
          className="w-full h-[100vw] sm:h-[75vw] lg:h-[50vw] xl:h-full"
        />
      </div>

      <div id="about" className="h-20 sm:h-24 relative z-30" />
      <div ref={aboutRef} className="homepage-body">
        <div className="text-6xl font-bold text-center text-pelu-red">
          Draconis
        </div>
        <div className="sm:mx-4 md:mx-6 lg:mx-10 text-3xl text-center mt-14 mb-10">
          {/* <span className="text-pelu-red font-bold">$DRACONIS</span> where the
          cheeky charisma of Pepe meets the legendary flair of Lu Bu, creating a
          fusion of fun and folklore. */}
          <span className="text-pelu-red font-bold">$DRACONIS</span> is said to
          be an enormous amphibian, far larger than any known species. Its
          defining feature is its dragon-like scales that shimmer in hues of
          green, gold, or sapphire. These scales provide both protection and an
          aura of otherworldly majesty.
        </div>

        <div className="text-2xl text-center mt-10 mb-20">
          CA: <span className="text-pelu-red">{contractAddress}</span>
        </div>

        <div className="w-full flex flex-wrap justify-between px-2 lg:px-6">
          <div className="w-full lg:w-[47.5%]">
            <div className="border-2 border-pelu-red rounded-md">
              <Image
                src={HeroApp}
                alt="pelu-hero"
                className="h-[400px] lg:h-[700px]"
              />
            </div>
          </div>

          <div className="w-full lg:w-[47.5%]">
            <div className="w-full text-3xl mt-4 lg:mt-0">
              <span className="text-pelu-red font-bold">$DRACONIS</span> could
              be seen as a representation of environmental protection or as a
              cautionary tale about the consequences of greed.
            </div>
            <br />
            <br />
            <div className="w-full text-3xl">
              <div className="text-4xl text-center sm:text-left font-bold mb-4">
                Join the <span className="text-pelu-red">$DRACONIS</span>{" "}
                Movement
              </div>
              Step into a world where myth meets mission. By joining us, you
              become part of a growing community dedicated to protecting the
              balance of our world—both environmental and ethical.
            </div>
            <br />
            <div className="w-full flex flex-wrap justify-center lg:justify-start items-center text-white m-auto gap-4">
              <Link
                href={findUsLink.dexscreener}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 hover:!text-primary"
              >
                <Image
                  src={DexscreenerLogo}
                  alt="dexscreener"
                  className="w-full h-full"
                />
              </Link>
              {/* <Link
                href={findUsLink.etherscan}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 hover:text-secondary"
              >
                <Image
                  src={EtherscanLogo}
                  alt="etherscan"
                  className="w-full h-full"
                />
              </Link> */}
              <Link
                href={socialsLink.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 hover:!text-primary"
              >
                <Image
                  src={TelegramLogo}
                  alt="telegram"
                  className="w-full h-full"
                />
              </Link>
              <Link
                href={socialsLink.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 hover:text-secondary"
              >
                <Image
                  src={TwitterLogo}
                  alt="twitter"
                  className="w-full h-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 sm:h-36" />
    </div>
  );
};

export default Home;
