import { ActionButton } from '../ActionButton';
import { Banner } from '../Banner';
import Section from '../ui/Section';
import { Separator } from '../ui/Separator';

export default function MainSection() {
  return (
    <header>
      <Banner
        alt="Pessoas comemorando em um escritório, indicando sucesso"
        text="trabalhe no elo7"
        src="/images/work-with-elo7.jpeg"
        className="max-h-[500px] w-full object-cover brightness-[70%]"
      />
      <Section className="animate-slidein gap-6 md:pt-8">
        <p className="px-2 text-center text-gray-500 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et viverra orci. Praesent consequat dolor
          tellus, eget viverra risus hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque libero eu eros
          sagittis.
        </p>
        <Separator />
        <ActionButton href="/oportunidades">vagas em aberto</ActionButton>
      </Section>
    </header>
  );
}
