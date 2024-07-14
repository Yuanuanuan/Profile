import { Trans } from "react-i18next/TransWithoutContext";
import { TFunction } from "i18next";
import { ProjectData } from "@/utils/dummyData";
import ProjectPost from "@/components/Project/ProjectPost";

export default function Project({ t }: { t: TFunction<any, undefined> }) {
  return (
    <section id="project">
      <h2 className="text-3xl font-bold mb-10">Project_</h2>
      <section className="project-container flex flex-col gap-6">
        {ProjectData.map((data) => {
          return <ProjectPost key={data.title} data={data} t={t} />;
        })}
      </section>
    </section>
  );
}
