import Image from "next/image";

export function Portrait({ portrait, name, className = "" }: { portrait: string; name: string; className?: string }) {
  return (
    <span className={`portrait portrait-${portrait} ${className}`}>
      <Image src={`/characters/${portrait}.webp`} alt={name} width={420} height={520} sizes="(max-width: 520px) 90vw, (max-width: 1050px) 42vw, 24vw" />
    </span>
  );
}
