import { Link } from "../ui/Link";
import { Separator } from "../ui/Separator";
import { Banner } from "../ui/Banner";
import Section from "../ui/Section";

export default function MainSection() {
  return (
    <header>
      <Banner
        alt="Pessoas comemorando em um escritório, indicando sucesso"
        text="trabalhe no elo7"
        src="/images/work-with-elo7.jpeg"
        className="brightness-[70%] max-h-[500px] w-full object-cover md:text-[80px]"
      />
      <Section>
        <p className="text-gray-500 text-base text-center mt-8 px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          viverra orci. Praesent consequat dolor tellus, eget viverra risus
          hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque
          libero eu eros sagittis.
        </p>
        <Separator />
        <Link href="/oportunidades" className="m-4">
          vagas em aberto
        </Link>
      </Section>
    </header>
  );
}
