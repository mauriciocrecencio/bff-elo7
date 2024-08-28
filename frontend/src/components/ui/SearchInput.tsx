import Search from '@/assets/svg/Search';
import { cn } from '@/lib/utils';

type Props = {
  placeholder: string;
  className?: string;
};
export function SearchInput({ placeholder, className }: Props) {
  return (
    <div className={cn('relative w-full', className)}>
      <input className={'w-full rounded-lg border border-gray-50 p-3 text-gray-50'} placeholder={placeholder} />
      <Search className="absolute right-0 top-0 m-3" />
    </div>
  );
}
