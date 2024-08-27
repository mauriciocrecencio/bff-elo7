import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
}

export function Link({children, className} : Props) {
  return (
    <a className={clsx('flex text-aqua border border-transparent hover:border-aqua hover:cursor-pointer p-2 w-fit transition-all rounded-md', className)}>
      {children}
    </a>
  )
}