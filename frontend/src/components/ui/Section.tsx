import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return (
    <section className={cn('flex flex-col items-center px-4 py-10 md:px-14 md:py-20', className)}>{children}</section>
  );
}
