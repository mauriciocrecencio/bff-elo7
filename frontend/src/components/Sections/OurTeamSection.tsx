import { Image } from '../ui/Image';
import Section from '../ui/Section';

const teamMembers = [
  {
    src: '/images/happy-woman.jpeg',
    alt: 'Mulher de camisa amarela sorrindo'
  },
  {
    src: '/images/happy-man.jpeg',
    alt: 'Homem de camisa azul sorrindo'
  },
  {
    src: '/images/happy-woman2.jpeg',
    alt: 'Mulher de camisa verde sorrindo'
  },
  {
    src: '/images/happy-man2.jpeg',
    alt: 'Homem de camisa branca sorrindo'
  }
];

export default function OurTeamSection() {
  return (
    <Section>
      <h2 className="text-center text-3xl">Conheça nosso time fora de série</h2>
      <ul className="mt-8 flex w-full flex-col gap-6 md:flex-row md:gap-4">
        {teamMembers.map((member) => (
          <li key={member.src} className="flex-1">
            <Image src={member.src} alt={member.alt} className="w-full rounded-2xl object-cover" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
