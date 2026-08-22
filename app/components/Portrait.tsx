import Image from "next/image";

export function Portrait({ portrait, name, className = "" }: { portrait: string; name: string; className?: string }) {
  const src = portrait === "lion" ? "/expanded/lion.webp" : `/characters/${portrait}.webp`;
  return (
    <span className={`portrait portrait-${portrait} ${className}`}>
      <Image src={src} alt={name} width={420} height={520} sizes="(max-width: 520px) 90vw, (max-width: 1050px) 42vw, 24vw" />
    </span>
  );
}
