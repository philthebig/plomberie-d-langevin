export const BUSINESS_NAME = "Plomberie D.Langevin";
export const PHONE_DISPLAY = "819-449-0778";
export const PHONE_TEL = "tel:+18194490778";
export const PHONE_E164 = "+18194490778";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
