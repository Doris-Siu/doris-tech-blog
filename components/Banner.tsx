export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl mb-5">Doris's Tech Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to my tech blog, where I share my knowledge and insights on
          all things web development.
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-500 max-w-sm">
        Web projects | Insights | New Technology | <br/>
        More to explore!
      </p>
    </div>
  );
}
