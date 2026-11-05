import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import photos from "./data/photos.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: absoluteUrl("/"),
    images: photos.map((photo) => absoluteUrl(photo.src)),
  }];
}
