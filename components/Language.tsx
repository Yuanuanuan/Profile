import Link from "next/link";
import { languages } from "@/i18n/settings";

export default function Langauge() {
  return (
    <div className="fixed w-36 p-2 left-1/2 rounded-b-lg -translate-x-1/2 bg-black text-gray-400 cursor-pointer z-50 flex gap-2 justify-center group">
      <div className="font-bold group-hover:text-white">Language</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        className="w-5"
      >
        <path
          d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
          className="fill-gray-400 group-hover:fill-white"
        ></path>
      </svg>
      <div className="absolute w-36 bg-black top-8 left-0 p-2 rounded-b-lg  scale-y-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 origin-top transition ease-in-out duration-300">
        <ul>
          <Link href={`/${languages[0]}`}>
            <li className="py-2 pl-3 hover:text-primary">English</li>
          </Link>
          <Link href={`/${languages[1]}`}>
            <li className="py-2 pl-3 hover:text-primary">繁體中文</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
