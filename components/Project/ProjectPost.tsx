import Image from "next/image";
import ToolTab from "@/components/ToolTab";
import { TFunction } from "i18next";
import { Trans } from "react-i18next/TransWithoutContext";

interface ProjectData {
  data: {
    imageSrc: string;
    title: string;
    content: string;
    href: string;
    tools: string[];
  };
  t: TFunction<any, undefined>;
}

export default function ProjectPost({ data, t }: ProjectData) {
  const TransComponents = {
    br: <br />,
  };

  let returnJSX = (
    <div className="post-container group">
      <div className="w-[130px] h-[70px] m-4 relative border-2 border-gray-800 rounded group-hover:border-gray-600">
        <Image
          src={`/images${data.imageSrc}`}
          style={{ objectFit: "cover" }}
          alt="project image"
          fill
          sizes="126px, 66px"
          quality={40}
        />
      </div>
      <div className="flex flex-col flex-1 py-3 pr-4 pl-0">
        <h3 className="font-bold mb-2 group-hover:text-primary">
          {data.title}
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
    returnJSX = (
      <a href={data.href} target="_blank">
        {returnJSX}
      </a>
    );
  }

  return returnJSX;
}
