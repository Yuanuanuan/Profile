export default function RightSideFooter() {
  return (
    <footer className="text-zinc-500">
      Build with &nbsp;
      <a
        className="text-zinc-400 font-bold cursor-pointer transition-colors hover:text-primary"
        href="https://nextjs.org/"
        target="_blank"
      >
        Next.js
      </a>
      &nbsp; and &nbsp;
      <a
        className="text-zinc-400 font-bold cursor-pointer transition-colors hover:text-primary"
        href="https://tailwindcss.com/"
        target="_blank"
      >
        Tailwind CSS
      </a>
      . Deployed with &nbsp;
      <a
        className="text-zinc-400 font-bold cursor-pointer transition-colors hover:text-primary"
        href="https://vercel.com/"
        target="_blank"
      >
        Vercel
      </a>
      .
    </footer>
  );
}
