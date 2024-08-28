import ArrowRight from '@/assets/svg/ArrowRight';
import { cn } from '@/lib/utils';

import { Link } from './Link';

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
  arrowPosition?: 'left' | 'right';
};

export function ActionButton({ children, className, href, arrowPosition = 'right' }: Props) {
  return (
    <a
      href={href}
      className={cn(
        'flex w-fit items-center rounded-md border border-transparent p-2 text-xl leading-6 text-aqua transition-all hover:cursor-pointer hover:border-aqua md:p-3',
        className
      )}
    >
      {arrowPosition === 'left' && <ArrowRight className="mr-2 rotate-180 transform" />}
      <Link href={href}>{children}</Link>
      {arrowPosition === 'right' && <ArrowRight className="ml-2" />}
    </a>
  );
}
