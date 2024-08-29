import { Job, JobByType } from '../ts/types/Job';
import { slugify } from './slugify';

function capitalizeWords(str: string | null) {
  if (!str) return null;
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

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
    title: capitalizeWords(formatTitle(title, level))!,
    location: capitalizeWords(formatLocation(location))!,
    path: slugify(title)
  };
}
