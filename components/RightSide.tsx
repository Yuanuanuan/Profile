import { TFunction } from "i18next";
import Introduce from "./Introduce";
import Experience from "./Experience/Experience";
import Project from "./Project/Project";

interface RightSideProps {
  t: TFunction<any, undefined>;
}

export default async function RightSide({ t }: RightSideProps) {
  return (
    <section className="w-1/2 h-fit py-24 text-white">
      <Introduce t={t} />
      <Experience t={t} />
      <Project t={t} />
    </section>
  );
}
