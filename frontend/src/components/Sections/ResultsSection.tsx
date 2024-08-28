import { results } from '@/constants/resultsSection';

import { Image } from '../ui/Image';
import { Link } from '../ui/Link';
import Section from '../ui/Section';

export function ResultsSection() {
  return (
    <Section className="bg-light-yellow">
      <ul className="flex flex-col gap-10 md:flex-row md:gap-4 md:*:flex-1">
        {results.map((result) => (
          <li key={result.image} className="flex flex-col items-center gap-6">
            <div className="rounded-full bg-highlight-yellow p-8">
              <Image src={result.image} alt={result.alt} className="size-[136px]" />
            </div>
            <h3 className="text-center text-2xl text-gray-500">{result.title}</h3>
            <p className="px-2 text-center text-xl text-gray-100">{result.description}</p>
            {result.action && <Link href={result.action.link}>{result.action.label}</Link>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
