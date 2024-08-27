import ArrowRight from "@/assets/svg/ArrowRight";
import { Link } from "./Link";
import { Separator } from "./Separator";

export default function Banner() {
  return (
    <header>
      <section className="relative">
        <img
          className="brightness-[70%]"
          src="/images/work-with-elo7.jpeg"
          alt="Pessoas felizes e comemorando"
        />
        <h1 className="text-3xl center-absolute text-white text-nowrap leading-9 font-bold">
          trabalhe no elo7
        </h1>
      </section>
      <section className="px-4 flex-col flex items-center">
      <p className="text-gray-500 text-base text-center mt-8 px-2" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
        viverra orci. Praesent consequat dolor tellus, eget viverra risus
        hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque libero
        eu eros sagittis.
      </p>
    <Separator/>
      <Link className='m-4'>vagas em aberto <ArrowRight/></Link>
      </section>
    </header>
  );
}
