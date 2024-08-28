import { Banner } from '../ui/Banner';
import { SearchInput } from '../ui/SearchInput';
import Section from '../ui/Section';

export function OpenOpportunitiesSection() {
  return (
    <footer>
      <Banner
        alt="Trabalho artesanal com flores e laços"
        className="max-h-96 w-full object-cover"
        src="/images/craftwork-flowers.jpeg"
      />
      <Section className="items-start py-10">
        <div className="flex w-full flex-col items-start md:flex-row md:items-center md:justify-between">
          <h2 className="text-center text-3xl">Vagas em aberto</h2>
          <SearchInput className="mt-6 md:max-w-80" placeholder="nome da vaga" />
        </div>
      </Section>
    </footer>
  );
}
