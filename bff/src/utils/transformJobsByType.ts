import { Job, JobByType } from '../ts/types/Job';
import { formatJob } from './formatJob';

export function transformJobsByType(jobs: Job[]): Record<string, JobByType[]> {
  const jobTypeRecord = jobs
    .filter((job) => job.is_active)
    .reduce((acc: Record<string, JobByType[]>, job) => {
      const { type } = job;

      if (!acc[type]) {
        acc[type] = [];
      }

      acc[type].push(formatJob(job));

      return acc;
    }, {});

  const sortedEntries = Object.entries(jobTypeRecord).sort(([, jobsA], [, jobsB]) => jobsB.length - jobsA.length);

  return Object.fromEntries(sortedEntries);
}
