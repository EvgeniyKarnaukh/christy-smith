# SEO configuration

The canonical origin is `https://christy-smith-rust.vercel.app`. To move the site, set `NEXT_PUBLIC_SITE_URL` to the new HTTPS origin in Vercel and rebuild. The canonical link, Open Graph URLs, Twitter image, sitemap, robots.txt, JSON-LD and PDF canonical header all use the shared configuration in `lib/site.ts`.

## Included

- Page title, description, author, language and canonical link.
- Open Graph cover at `app/opengraph-image.jpg`, 1200 × 630, with descriptive alt text. Twitter uses the same image with a large summary card.
- `robots.txt` pointing to `sitemap.xml`; the sitemap lists the home page and its 26 original photographs.
- JSON-LD for the website, page, family-history article, Mary Smith and the downloadable brochure. Dates and organizations are omitted where the supplied material does not establish them.
- A canonical HTTP Link header on the brochure, pointing to the equivalent HTML story.
- Existing SVG/favicon branding and a 180 × 180 Apple touch icon.

## OG cover generation

Generated with the built-in ImageGen tool, then resized and encoded as an optimized JPEG for delivery. It is a decorative title cover; no documentary photographs or people were synthesized.

Final generation prompt:

> Use case: ads-marketing. Asset type: Open Graph social sharing cover for the memorial documentary website Three Stories, One Family. Generate an elegant finished typographic cover, wide landscape aspect ratio 1200:630. Warm ivory paper background #f8f6f1, very subtle paper grain, burgundy #742c3c and charcoal #282824 typography. Large highly readable editorial serif headline on two lines: "Three Stories," then italic serif "One Family". Smaller refined sans serif text beneath exactly "Presented by Mary Smith". Tiny bottom caption exactly "Eileen · Mary · Christy". Left aligned composition with generous safe margins at least 80px, primary typography occupying left two thirds. Right third contains a delicate abstract motif of three interwoven continuous burgundy botanical loops converging to one stem, symbolizing three lives in one family. Fine understated offset rectangular border as in an archival book cover. Dignified, restrained, contemporary literary memoir art direction. All text must be exactly as specified and clearly readable in a small social preview. No photographs, no invented people, no extra words, no URLs, no shadows, no mockup, no watermark. Flat finished artwork filling the entire canvas.

## References

- [Google: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Google: canonical links, including HTTP headers for PDFs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

After deploying, the live domain can be submitted to Google Search Console along with `/sitemap.xml`. The repository changes do not submit or verify ownership of an external account.
