import { Job, JobByType } from '../ts/types/Job';
import { capitalizeWords, slugify } from '.';

export function filterInactiveJobs(jobs: Job[]): Job[] {
  return jobs.filter((job) => job.is_active);
}

export function transformJobsByType(jobs: Job[]): Record<string, JobByType[]> {
  return jobs.reduce((acc: Record<string, JobByType[]>, job) => {
    const type = capitalizeWords(job.type);

    if (!acc[type]) {
      acc[type] = [];
    }

    acc[type].push(formatJob(job));

    return acc;
  }, {});
}

function formatLocation(location: string | null): string {
  return location
    ? capitalizeWords(
        location
          .split(',')
          .filter((_, index) => index !== 1)
          .join()
      )
    : 'Remoto';
}

function formatTitle(title: string, level: string): string {
  return capitalizeWords(`${title} - ${level}`);
}

export function formatJob(job: Job): JobByType {
  const { title, level, location } = job;

  return {
    title: formatTitle(title, level),
    location: formatLocation(location),
    path: slugify(title)
  };
}

export function sortJobsByType(jobs: Job[]): Job[] {
  const typeCounts: Record<string, number> = jobs.reduce((acc: Record<string, number>, job) => {
    acc[job.type] = (acc[job.type] || 0) + 1;
    return acc;
  }, {});

  return jobs.sort((a, b) => {
    return typeCounts[b.type] - typeCounts[a.type];
  });
}
