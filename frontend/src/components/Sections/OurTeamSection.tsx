import { Image } from "../ui/Image";
import Section from "../ui/Section";

const teamMembers = [
  {
    src: '/images/happy-woman.jpeg',
    alt: 'Mulher de camisa amarela sorrindo',
  },
  {
    src: '/images/happy-man.jpeg',
    alt: 'Homem de camisa azul sorrindo',
  },
  {
    src: '/images/happy-woman2.jpeg',
    alt: 'Mulher de camisa verde sorrindo',
  },
  {
    src: '/images/happy-man2.jpeg',
    alt: 'Homem de camisa branca sorrindo',
  },
]

export default function OurTeamSection() {
  return (
      <Section className="py-10">
        <h2 className="text-3xl text-center">Conheça nosso time fora de série</h2>
        <ul className="flex gap-6 flex-col mt-8">
          {teamMembers.map((member, index) => (
            <li key={member.src}>
              <Image src={member.src} alt={member.alt} className="rounded-2xl" />
            </li>
          ))}
        </ul>
      </Section>
  );
}
