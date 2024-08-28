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
      {text && <h1 className="text-3xl center-absolute text-white text-nowrap leading-9 font-bold md:text-[80px] md:leading-[96px]">
        {text}
      </h1>}
  </section>
  )
}