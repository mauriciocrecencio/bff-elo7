import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
}

export default function Section({children, className}: Props) {
  return (
    <section className={cn("px-4 py-10 flex-col flex items-center md:py-20 md:px-14", className)}>
      {children}
    </section>
  );
}