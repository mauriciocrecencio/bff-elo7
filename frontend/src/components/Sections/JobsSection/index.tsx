import { useState } from 'react';

import { Banner } from '@/components/Banner';
import { SearchInput } from '@/components/SearchInput';
import Section from '@/components/ui/Section';
import { Separator } from '@/components/ui/Separator';
import { Skeleton } from '@/components/ui/Skeleton';
import { useDebounce } from '@/hooks/useDebounce';
import { useGetJobs } from '@/hooks/useGetJobs';

import { JobsList } from './JobsList';

export function JobsSection() {
  const [search, setSearch] = useState('');
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(10);

  const debouncedValue = useDebounce(search, 1000);

  const { data: jobs, isLoading } = useGetJobs({
    search: debouncedValue
    // page,
    // limit
  });

  return (
    <footer>
      <Banner
        alt="Trabalho artesanal com flores e laços"
        className="max-h-96 w-full object-cover"
        src="/images/craftwork-flowers.jpeg"
      />
      <Section className="items-start py-10 text-gray-500">
        <div className="flex w-full flex-col items-start md:flex-row md:items-center md:justify-between">
          <h2 className="text-center text-3xl font-semibold">Vagas em aberto</h2>
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-2 mt-2 md:mb-0 md:mt-0 md:max-w-80"
            placeholder="nome da vaga"
          />
        </div>
        <div className="w-full">
          {isLoading ? (
            <SkeletonJobs />
          ) : jobs ? (
            <JobsList jobsList={jobs} />
          ) : (
            <>
              <p className="mt-10 text-center text-2xl">Poxa, que pena 😥</p>
              <p className="mt-2 text-center text-2xl">não estamos com nenhuma vaga aberta no momento</p>
            </>
          )}
        </div>
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
