import { results } from "@/constants/resultsSection";
import Section from "../ui/Section";
import { Image } from "../ui/Image";
import { Link } from "../ui/Link";

export function ResultsSection() {
  return (
    <Section className="pb-10 bg-light-yellow">
      <ul>
        {results.map((result, index) => (
          <li key={result.image} className="flex flex-col items-center gap-6 mt-10">
            <div className="bg-highlight-yellow rounded-full p-8">
              <Image src={result.image} alt={result.alt} className="size-[136px]" />
            </div>
            <h3 className="text-2xl text-gray-500 text-center">{result.title}</h3>
            <p className="text-center text-xl text-gray-100 px-2">{result.description}</p>
            {result.action && ( 
              <Link href={result.action.link}>
                {result.action.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}