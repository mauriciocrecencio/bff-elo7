import { Banner } from "../ui/Banner";
import { SearchInput } from "../ui/SearchInput";
import Section from "../ui/Section";

export function OpenOpportunitiesSection() {
  return (
    <footer>
      <Banner alt="Trabalho artesanal com flores e laços" src="/images/craftwork-flowers.jpeg"/>
      <Section className="items-start py-10">
      <h2 className="text-3xl text-center">Vagas em aberto</h2>
      <SearchInput className="mt-6" placeholder="nome da vaga"/>
      </Section>
    </footer>
  )
}