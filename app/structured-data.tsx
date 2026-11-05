import { absoluteUrl, siteName, siteDescription } from "@/lib/site";
import photos from "./data/photos.json";

export default function StructuredData() {
  const websiteId = absoluteUrl("/#website");
  const webpageId = absoluteUrl("/#webpage");
  const articleId = absoluteUrl("/#family-story");
  const authorId = absoluteUrl("/#mary-smith");
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: siteName,
        description: siteDescription,
        inLanguage: "en-IE",
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: absoluteUrl("/"),
        name: siteName,
        description: siteDescription,
        inLanguage: "en-IE",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": articleId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(photos[0].src),
          caption: photos[0].alt,
          width: photos[0].width,
          height: photos[0].height,
        },
      },
      { "@type": "Person", "@id": authorId, name: "Mary Smith" },
      {
        "@type": "Article",
        "@id": articleId,
        headline: siteName,
        description: siteDescription,
        inLanguage: "en-IE",
        author: { "@id": authorId },
        mainEntityOfPage: { "@id": webpageId },
        image: [0, 6, 24].map((index) => absoluteUrl(photos[index].src)),
        about: [
          { "@type": "Person", name: "Eileen Smith" },
          { "@id": authorId },
          { "@type": "Person", name: "Christopher Smith", alternateName: "Christy Smith" },
        ],
        associatedMedia: {
          "@type": "MediaObject",
          name: `${siteName} — brochure`,
          contentUrl: absoluteUrl("/three-stories-one-family.pdf"),
          encodingFormat: "application/pdf",
          inLanguage: "en-IE",
        },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  }} />;
}
