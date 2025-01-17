import { TFunction } from "i18next";
import Introduce from "./Introduce";
import Experience from "./Experience/Experience";
import Project from "./Project/Project";
import RightSideFooter from "./RightSideFooter";

interface RightSideProps {
  t: TFunction<any, undefined>;
}

export default async function RightSide({ t }: RightSideProps) {
  return (
    <section className="300:py-10 xs:py-16 md:w-full lg:py-24 lg:w-1/2 h-fit text-white">
      <Introduce t={t} />
      <Experience t={t} />
      <Project t={t} />
      <RightSideFooter />
    </section>
  );
}
