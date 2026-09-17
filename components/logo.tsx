const LOGO_PNG = "/logo.png";
const LOGO_SVG = "/logo.svg";
/** Intrinsic size of public/logo.png (official lockup with phone). */
export const LOGO_WIDTH = 2796;
export const LOGO_HEIGHT = 1290;

type LogoProps = {
  className?: string;
  priority?: boolean;
  decorative?: boolean;
};

/**
 * Native img so the lockup loads from /public directly.
 * next/image routes through /_next/image, which file-deployed
 * previews often lack — the mark then fails silently.
 */
export function Logo({
  className,
  priority = false,
  decorative = false,
}: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- public PNG; skip the image optimizer
    <img
      src={LOGO_PNG}
      alt={decorative ? "" : "Plomberie D.Langevin"}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
      onError={(event) => {
        const image = event.currentTarget;
        if (image.src.endsWith("logo.svg")) return;
        image.src = LOGO_SVG;
      }}
    />
  );
}
