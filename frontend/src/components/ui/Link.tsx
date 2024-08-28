import ArrowRight from '@/assets/svg/ArrowRight';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
  arrowPosition?: 'left' | 'right';
};

export function Link({ children, className, href, arrowPosition = 'right' }: Props) {
  return (
    <a
      href={href}
      className={cn(
        'flex w-fit rounded-md border border-transparent p-2 text-xl leading-6 text-aqua transition-all hover:cursor-pointer hover:border-aqua md:p-3',
        className
      )}
    >
      {arrowPosition === 'left' && <ArrowRight className="mr-2 rotate-180 transform" />}
      {children}
      {arrowPosition === 'right' && <ArrowRight className="ml-2" />}
    </a>
  );
}
