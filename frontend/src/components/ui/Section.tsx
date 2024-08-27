import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
}

export default function Section({children, className}: Props) {
  return (
    <section className={cn("px-4 flex-col flex items-center", className)}>
      {children}
    </section>
  );
}