export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mt-5 mb-10">
      <div>
        <h1 className="text-7xl text-[#f3647d] mb-5">Doris&#39;s Tech Blog</h1>
        <h2 className="text-[#707070] mt-5 md:mt-0">
          Welcome to my tech blog, where I share my knowledge and insights on
          all things web development. <br />
          <a
            className="underline hover:text-[#f3647d]"
            href="https://www.linkedin.com/in/doris-siu/"
          >
            My LinkedIn here
          </a>
        </h2>
      </div>
    </div>
  );
}
