import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
}

export default function Section({children, className}: Props) {
  return (
    <section className={clsx("px-4 flex-col flex items-center", className)}>
      {children}
    </section>
  );
}