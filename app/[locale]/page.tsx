import Langauge from "@/components/Language";
import RightSide from "@/components/RightSide";
import LeftSide from "@/components/LeftSide";
import { useTranslation } from "@/i18n";

interface HomeProps {
  params: { locale: string };
}

export default async function Home({ params: { locale } }: HomeProps) {
  const { t } = await useTranslation(locale, "common");
  return (
    <main className="300:px-4 xs:px-6 sm:px-10 sm:pb-10 md:px-24 lg:px-24 lg:flex gap-4 mx-auto max-w-[1280px] h-[100vh] relative overflow-y-scroll main-wrapper">
      <Langauge />
      <LeftSide t={t} />
      <RightSide t={t} />
    </main>
  );
}
