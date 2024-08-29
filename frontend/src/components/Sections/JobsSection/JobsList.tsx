import React from 'react';

import { Job } from '@/ts/types/Job';

import { JobItem } from './JobItem';

type Props = {
  jobsList: {
    [key: string]: Job[];
  };
};

export function JobsList({ jobsList }: Props) {
  return Object.entries(jobsList).map(([type, jobs]) => (
    <React.Fragment key={type}>
      <h3 className="mt-8 text-[26px] font-medium leading-7">{type}</h3>
      <ul className="flex flex-col">
        {jobs.map((job) => (
          <JobItem key={job.path} job={job} />
        ))}
      </ul>
    </React.Fragment>
  ));
}
