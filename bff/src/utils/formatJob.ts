import { Job, JobByType } from '../ts/types/Job';
import { slugify } from './slugify';

function formatLocation(location: string | null): string {
  return location
    ? location
        .split(',')
        .filter((_, index) => index !== 1)
        .join()
    : 'Remoto';
}

function formatTitle(title: string, level: string): string {
  return `${title} - ${level}`;
}

export function formatJob(job: Job): JobByType {
  const { title, level, location } = job;

  return {
    title: formatTitle(title, level),
    location: formatLocation(location),
    path: slugify(title)
  };
}
