import { groq } from "next-sanity";
import { client } from "../../../lib/sanity-client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30; //revalidate this page every 30 seconds

export default async function Disclaimer({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='disclaimer'][0]{
  ...,
}
`;

  const disclaimer: Disclaimer = await client.fetch(query);

  return (
    <article className="px-10 pt-14 pb-28">
      <PortableText value={disclaimer.body} components={RichTextComponents} />
    </article>
  );
}
