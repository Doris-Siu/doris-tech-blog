import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity-client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30; //revalidate this page every 30 seconds

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']{
 slug
}`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='post' && slug.current ==$slug][0]{
  ...,
  author->,
   categories[]->
}
`;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 text-white rounded-3xl">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-20 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.coverImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className="p-10 bg-[#f3647d] w-full rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div className="text-white">
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post.date).toLocaleString("en-UK", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.picture).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className="text-white w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* Author Bio */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10">
                {post.content[0].children[0].text}
              </h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="bg-white text-[#f3647d] px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="px-10 py-5 mt-10 rounded-3xl">
        <PortableText
          className="pt-0.5"
          value={post.body}
          components={RichTextComponents}
        />
      </section>
    </article>
  );
}
