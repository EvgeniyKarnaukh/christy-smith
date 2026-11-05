// Set NEXT_PUBLIC_SITE_URL when moving the site to a custom domain.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://christy-smith-rust.vercel.app",
).origin;

export const siteName = "Three Stories, One Family";
export const siteDescription =
  "Mary Smith shares the stories of Eileen Smith and Christopher (Christy) Smith through family photographs and her account of Ireland’s institutional system.";

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}
