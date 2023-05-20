import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="#">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/107772913?v=4"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-2 gap-5">
        <div className="flex gap-2 pb-3 pr-0 md:pb-0 md:gap-8 mt-5 md:mt-2 text-[#707070] text-xs md:text-lg font-medium">
          <p>PROJECT</p>
          <p>INSIGHT</p>
          <p>TECH</p>
          <p>MORE</p>
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-5 md:space-y-0">
          <Link
            href="https://www.linkedin.com/in/doris-siu/"
            className="px-2 py-1 md:px-4 md:py-3 bg-white text-[#f3647d] flex items-center rounded-full text-center text-sm md:text-lg font-medium"
          >
            Linkedin
          </Link>
          <Link
            href="https://github.com/Doris-Siu"
            className="px-2 py-1 md:px-5 md:py-3 bg-white text-[#f3647d] flex items-center rounded-full text-center text-sm md:text-lg font-medium"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
