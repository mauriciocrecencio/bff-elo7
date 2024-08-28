import { cn } from '@/lib/utils';

type Props = {
  width?: number;
  height: number;
  className?: string;
};

export function Skeleton({ width, height, className }: Props) {
  const defaultWidth = width || '100%';
  return (
    <div
      style={{ width: defaultWidth, height }}
      className={cn('w-full animate-pulse rounded-md bg-gray-200', className)}
    />
  );
}
