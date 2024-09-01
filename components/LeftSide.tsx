import Instagram from "@/components/icons/Instagram";
import Github from "@/components/icons/Github";
import Email from "./icons/Email";
import { TFunction } from "i18next";
import { Trans } from "react-i18next/TransWithoutContext";

interface LeftSideProps {
  t: TFunction<any, undefined>;
}

export default function LeftSide({ t }: LeftSideProps) {
  const mailtoLink = "mailto:asdll6618@gmail.com";
  return (
    <section className="w-1/2 sticky top-0 flex flex-col justify-between py-24">
      <header>
        <h1 className="text-5xl font-black tracking-tight text-white font-inter">
          TzuYuan Kao
        </h1>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
          Frontend Developer
        </h2>
        <p className="text-gray-400 mt-4 w-4/5">
          <Trans i18nKey={"about"}>{t("about")}</Trans>
        </p>
      </header>
      <footer className="flex gap-6">
        <a href={mailtoLink}>
          <Email />
        </a>
        <a href="https://www.instagram.com/tzuyuan_0825/" target="_blank">
          <Instagram />
        </a>
        <a href="https://github.com/Yuanuanuan" target="_blank">
          <Github />
        </a>
      </footer>
    </section>
  );
}
