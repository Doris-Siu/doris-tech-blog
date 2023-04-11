import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      {/* <div className="absolute w-96 h-96 bg-black z-[-10] right-1/4"></div> */}
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
        <h1 className="text-lg font-medium">DORIS</h1>
      </div>

      <div className="flex items-center space-x-2 gap-5">
        <p className="mt-5 md:mt-2 text-[#707070] text-lg font-medium">
          PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          INSIGHT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          TECH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MORE
        </p>
        <Link
          href="mailto:doris.siu.my@gmail.com"
          className="px-5 py-3 md:text-base bg-[#f3647d] text-white flex items-center rounded-full text-center text-lg font-medium"
        >
          Get in touch with me
        </Link>
      </div>
    </header>
  );
}
