import type { SectionProps } from "./types";

export const Section = ({
  title,
  children,
  ...rest
}: SectionProps) => {
  return (
    <section {...rest}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
