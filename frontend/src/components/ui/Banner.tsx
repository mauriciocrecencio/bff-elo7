import { Image } from './Image';

type Props = {
  text?: string;
  src: string;
  className?: string;
  alt: string;
};

export function Banner({ text, alt, src, className }: Props) {
  return (
    <section className="relative">
      <Image src={src} alt={alt} className={className} />
      {text && (
        <h1 className="center-absolute text-nowrap text-3xl font-bold leading-9 text-white md:text-[80px] md:leading-[96px]">
          {text}
        </h1>
      )}
    </section>
  );
}
