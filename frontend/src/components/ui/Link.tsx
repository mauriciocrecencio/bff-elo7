import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export function Link({ children, className, href }: Props) {
  return (
    <a href={href} className={cn('flex w-fit text-xl leading-6 text-aqua transition-all', className)}>
      {children}
    </a>
  );
}
