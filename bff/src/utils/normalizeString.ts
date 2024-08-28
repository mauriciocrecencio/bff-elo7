import { Job } from '../ts/types/Job';

function capitalizeWords(str: string) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function normalizeJobData(jobs: Job[]): Job[] {
  return jobs.map((job) => ({
    ...job,
    title: capitalizeWords(job.title),
    level: capitalizeWords(job.level),
    type: capitalizeWords(job.type),
    location: job.location ? capitalizeWords(job.location) : null
  }));
}
