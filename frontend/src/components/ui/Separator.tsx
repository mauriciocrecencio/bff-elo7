import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export function Separator({ className }: Props) {
  return <div className={cn('h-px w-full bg-gray-50', className)} />;
}
