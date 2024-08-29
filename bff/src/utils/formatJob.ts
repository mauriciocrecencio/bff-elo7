import { Job, JobByType } from '../ts/types/Job';
import { capitalizeWords, slugify } from '.';

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
