import ArrowRight from '@/assets/svg/ArrowRight';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
  arrowPosition?: 'left' | 'right';
}

export function Link({children, className, href, arrowPosition = 'right'} : Props) {
  return (
    <a href={href} className={cn('flex text-aqua border border-transparent hover:border-aqua hover:cursor-pointer p-2 w-fit transition-all rounded-md text-xl leading-6', className)}>
      {arrowPosition === 'left' && <ArrowRight className="transform rotate-180 mr-2" />}
      {children}
      {arrowPosition === 'right' && <ArrowRight className='ml-2'/>}
    </a>
  )
}