import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import photos from "./data/photos.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: absoluteUrl("/"),
    // The second copy of the family photograph is not displayed on the page.
    images: photos.filter((_, index) => index !== 23).map((photo) => absoluteUrl(photo.src)),
  }];
}
