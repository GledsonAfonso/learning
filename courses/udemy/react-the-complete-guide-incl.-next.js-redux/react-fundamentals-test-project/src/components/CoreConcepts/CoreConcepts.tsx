import { CORE_CONCEPTS, } from '../../utils/data';
import { CoreConcept } from '../CoreConcept/CoreConcept';
import { Section } from '../Section/Section';

export const CoreConcepts = () => {
  return (
    <Section
      id='core-concepts'
      title='Core Concepts'
    >
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept
            key={conceptItem.title}
            {...conceptItem}
          />
        ))}
      </ul>
    </Section>
  );
};
