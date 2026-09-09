import Image from "next/image";

type BrandLogoProps = {
  variant?: "dark" | "light" | "wordmark";
  className?: string;
  priority?: boolean;
};

const sources = {
  dark: {
    src: "/sureclear-logo.png",
    alt: "SureClear",
    width: 1557,
    height: 300,
  },
  light: {
    src: "/sureclear-logo-light.png",
    alt: "SureClear",
    width: 1557,
    height: 300,
  },
  wordmark: {
    src: "/sureclear-logo-wordmark.png",
    alt: "SureClear",
    width: 600,
    height: 128,
  },
} as const;

export function BrandLogo({
  variant = "dark",
  className = "h-8 w-auto",
  priority = false,
}: BrandLogoProps) {
  const source = sources[variant];

  return (
    <Image
      src={source.src}
      alt={source.alt}
      width={source.width}
      height={source.height}
      priority={priority}
      className={className}
    />
  );
}
