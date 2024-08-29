import { Link } from '@/components/ui/Link';
import { Separator } from '@/components/ui/Separator';
import { Job } from '@/ts/types/Job';

type Props = {
  job: Job;
};

export function JobItem({ job }: Props) {
  return (
    <li key={job.path} className="w-full">
      <Link className="mt-6 text-pretty" href={job.path}>
        {job.title}
      </Link>
      <p className="mb-4 mt-2 leading-7">{job.location}</p>
      <Separator />
    </li>
  );
}
