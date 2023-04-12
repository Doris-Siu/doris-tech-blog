import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#f3647d] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className="object-fill lg:object-center"
                  src={urlFor(post.coverImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 backdrop-blur-lg text-white p-5 flex justify-between text-sm md:text-base">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post.date).toLocaleString("en-UK", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="bg-[#f3647d] text-center text-white px-3 py-1 rounded-full text-xs md:text-base text-em font-semibold"
                      >
                        <p>{tag}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex-1">
                <p className="text-[#707070] line-clamp-2">
                  {post.content[0].children[0].text}
                </p>
              </div>
              <p className="mt-5 font-bold flex items-center group-hover:underline hover:text-[#f3647d]">
                Read More
                <ArrowUpRightIcon className="nl-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
