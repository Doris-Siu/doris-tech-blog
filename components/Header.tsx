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
        <h1>DORIS</h1>
      </div>
      <div>
        <Link
          href="mailto:doris.siu.my@gmail.com"
          className="px-5 py-3 text-sm md:text-base bg-[#9e4e5a] text-[#C0C0C0] flex items-center rounded-full text-center"
        >
          Get in touch with me
        </Link>
      </div>
    </header>
  );
}
