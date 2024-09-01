import { TFunction } from "i18next";
import { ExperienceData } from "@/utils/dummyData";
import ExperiencePost from "./ExperiencePost";

export default function Experience({ t }: { t: TFunction<any, undefined> }) {
  return (
    <section id="experience" className="mt-20">
      <h2 className="text-3xl font-bold mb-10">Experience_</h2>
      <section className="experience-container text-gray-400">
        {ExperienceData.map((data) => {
          return <ExperiencePost key={data.title} data={data} t={t} />;
        })}
      </section>
    </section>
  );
}
