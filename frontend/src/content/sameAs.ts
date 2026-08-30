/** Clean profile URLs for JSON-LD `sameAs` (no UTM). */
export const personSameAs = [
  "https://www.instagram.com/anton_cheg/",
  "https://www.youtube.com/@anton_cheg",
  "https://linktr.ee/anton_cheg",
  "https://finmentor.pro/about/#team",
  "https://t.me/anton_cheg",
] as const;

const FINMENTOR_TEAM = "https://finmentor.pro/about/";

/** Outbound FinMentor clicks — query before hash so GA can read UTM. */
export function finmentorReferralUrl(placement: string): string {
  const url = new URL(FINMENTOR_TEAM);
  url.searchParams.set("utm_source", "family-wealth");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "website");
  url.searchParams.set("utm_content", placement);
  url.hash = "team";
  return url.toString();
}
