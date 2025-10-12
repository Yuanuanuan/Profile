import Instagram from "@/components/icons/Instagram";
import Github from "@/components/icons/Github";
import Email from "@/components/icons/Email";
import Linkin from "@/components/icons/Linkin";
import { TFunction } from "i18next";
import { Trans } from "react-i18next/TransWithoutContext";
import Image from "next/image";
import CakeResume from "./icons/CakeResume";

interface LeftSideProps {
  t: TFunction<any, undefined>;
}

export default function LeftSide({ t }: LeftSideProps) {
  const mailtoLink = "mailto:asdll6618@gmail.com";

  return (
    <section className="300:pt-12 sm:pt-12 md:pt-24 md:w-full lg:sticky lg:w-1/2 lg:py-24 top-0 flex flex-col justify-between">
      <header>
        <h1 className="300:text-3xl sm:text-5xl font-black tracking-tight text-primary font-inter">
          TzuYuan Kao
        </h1>
        <h2 className="300:text-lg sm:text-2xl mt-3 font-bold tracking-tight text-white">
          Software Engineer - Frontend
        </h2>
        <p className="md:w-3/5 lg:w-4/5 w-full text-gray-400 mt-4">
          <Trans i18nKey={"about"}>{t("about")}</Trans>
        </p>
      </header>
      <footer className="300:mt-5 sm:mt-10 md:mt-10 flex gap-6 justify-start ">
        <a href={mailtoLink}>
          <Email />
        </a>
        <a href="https://www.instagram.com/tzuyuan_0825/" target="_blank">
          <Instagram />
        </a>
        <a href="https://github.com/Yuanuanuan" target="_blank">
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/tzuyuan-kao-130770280/"
          target="_blank"
        >
          <Linkin />
        </a>
        <a
          href="https://www.cake.me/me/asdll6618"
          target="_blank"
          className="w-6 h-6"
        >
          <CakeResume />
        </a>
      </footer>
    </section>
  );
}
