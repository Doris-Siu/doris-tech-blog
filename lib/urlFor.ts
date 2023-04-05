import { client } from "./sanity-client";
import urlForImage from "@sanity/image-url";

const builder = urlForImage(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
