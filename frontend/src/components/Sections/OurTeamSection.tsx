import { teamMembers } from '@/constants/ourTeamSection';

import { Image } from '../ui/Image';
import Section from '../ui/Section';

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
