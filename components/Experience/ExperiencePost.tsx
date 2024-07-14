import { TFunction } from "i18next";
import { Trans } from "react-i18next/TransWithoutContext";
import ToolTab from "@/components/ToolTab";

interface ExperienceData {
  data: {
    time: string;
    title: string;
    href?: string;
    content: string;
    tools: string[];
  };
  t: TFunction<any, undefined>;
}

export default function ExperiencePost({ data, t }: ExperienceData) {
  const TransComponents = {};

  let experienceJSX = (
    <div className="post-container group">
      <div className="w-[162px] text-sm pl-4 pt-4">{data.time}</div>
      <div className="flex flex-col flex-1 py-3 pr-4 pl-0">
        <h3 className="font-bold mb-2 text-white group-hover:text-primary">
          {t(data.title)}
        </h3>
        <p className="text-gray-400 mb-3 text-sm">
          <Trans i18nKey={data.content} components={TransComponents}>
            {t(data.content)}
          </Trans>
        </p>
        <div className="flex gap-2 flex-wrap my-2">
          {data.tools.map((tool, index) => {
            return <ToolTab key={index} tool={tool} />;
          })}
        </div>
      </div>
    </div>
  );

  if (data.href) {
    experienceJSX = (
      <a href={data.href} target="_blank">
        {experienceJSX}
      </a>
    );
  }

  return experienceJSX;
}
