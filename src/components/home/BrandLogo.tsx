import Image from "next/image";

type BrandLogoProps = {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

const sources = {
  dark: {
    src: "/sureclear-logo.png",
    alt: "SureClear",
  },
  light: {
    src: "/sureclear-logo-light.png",
    alt: "SureClear",
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
      width={1557}
      height={300}
      priority={priority}
      className={className}
    />
  );
}
