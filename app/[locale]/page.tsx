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
    <main className="flex gap-4 mx-auto max-w-[1280px] h-[100vh] px-24 relative overflow-y-scroll main-wrapper">
      <Langauge />
      <LeftSide />
      <RightSide t={t} />
    </main>
  );
}
