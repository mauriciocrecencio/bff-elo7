import { Image } from "./Image";

type Props = {
  text?: string;
  src: string;
  className?: string;
  alt: string;
};

export function Banner({text,alt, src, className}: Props) {
  return (
    <section className="relative">
      <Image src={src} alt={alt} className={className}/> 
      {text && <h1 className="text-3xl center-absolute text-white text-nowrap leading-9 font-bold">
        trabalhe no elo7
      </h1>}
  </section>
  )
}