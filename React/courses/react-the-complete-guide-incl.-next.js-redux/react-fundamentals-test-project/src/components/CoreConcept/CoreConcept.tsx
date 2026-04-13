import type { CoreConceptProps } from './types';

export const CoreConcept = ({
  image,
  title,
  description,
}: CoreConceptProps) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
