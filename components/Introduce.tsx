import { TFunction } from "i18next";
import { Trans } from "react-i18next/TransWithoutContext";
import path from "@/utils/path";

export default function Introduce({ t }: { t: TFunction<any, undefined> }) {
  const TransComponents = {
    f2e: <a className="text-link" href={path.f2e} target="_blank" />,
    ac: <a className="text-link" href={path.ac} target="_blank" />,
    udemy: <a className="text-link" href={path.udemy} target="_blank" />,
    goal: <a className="text-link" href={path.goal} target="_blank" />,
    br: <br />,
  };

  return (
    <article id="about">
      <h2 className="text-3xl font-bold mb-5">Introduce_</h2>
      <p className="text-gray-400">
        <Trans i18nKey="introduce" components={TransComponents}>
          {t("introduce")}
        </Trans>
      </p>
    </article>
  );
}
