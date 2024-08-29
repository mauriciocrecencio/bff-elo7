import { Banner } from '@/components/ui/Banner';
import { SearchInput } from '@/components/ui/SearchInput';
import Section from '@/components/ui/Section';
import { Separator } from '@/components/ui/Separator';
import { Skeleton } from '@/components/ui/Skeleton';
import { useGetJobs } from '@/hooks/useGetJobs';

import { JobsList } from './JobsList';

export function JobsSection() {
  const { data: jobs, isLoading } = useGetJobs();

  return (
    <footer>
      <Banner
        alt="Trabalho artesanal com flores e laços"
        className="max-h-96 w-full object-cover"
        src="/images/craftwork-flowers.jpeg"
      />
      <Section className="items-start py-10 text-gray-500">
        <div className="flex w-full flex-col items-start md:flex-row md:items-center md:justify-between">
          <h2 className="text-center text-3xl">Vagas em aberto</h2>
          <SearchInput className="mb-10 mt-2 md:mb-0 md:mt-0 md:max-w-80" placeholder="nome da vaga" />
        </div>
        <div className="w-full">{!isLoading ? <SkeletonJobs /> : <JobsList jobsList={jobs} />}</div>
      </Section>
    </footer>
  );
}

const SkeletonJobs = () => (
  <ul>
    {[1, 2].map((_, index) => (
      <li key={index}>
        <Skeleton height={40} className="my-4 h-6" />
        <Skeleton height={20} className="mb-4 h-6" />
        <Separator />
      </li>
    ))}
  </ul>
);
