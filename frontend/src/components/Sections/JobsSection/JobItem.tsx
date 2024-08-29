import { Link } from '@/components/ui/Link';
import { Separator } from '@/components/ui/Separator';
import { Job } from '@/ts/types/Job';

type Props = {
  job: Job;
  jobsCount: number;
};

export function JobItem({ job, jobsCount }: Props) {
  return (
    <li key={job.path} className="w-full">
      <div className="mt-6 flex flex-col gap-2 md:flex md:flex-row md:items-center md:justify-between">
        <Link className="text-pretty md:text-2xl" href={job.path}>
          {job.title}
        </Link>
        <p className="leading-7 md:text-2xl">{job.location}</p>
      </div>
      {jobsCount > 1 && <Separator className="mt-6" />}
    </li>
  );
}
