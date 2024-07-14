import Instagram from "@/components/icons/Instagram";
import Github from "@/components/icons/Github";

export default function LeftSide() {
  return (
    <section className="w-1/2 sticky top-0 flex flex-col justify-between py-24">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          TzuYuan Kao
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-white">
          Frontend Developer
        </h2>
        <p></p>
      </header>
      <section></section>
      <footer className="flex gap-6">
        <Instagram />
        <a href="https://github.com/Yuanuanuan" target="_blank">
          <Github />
        </a>
      </footer>
    </section>
  );
}
