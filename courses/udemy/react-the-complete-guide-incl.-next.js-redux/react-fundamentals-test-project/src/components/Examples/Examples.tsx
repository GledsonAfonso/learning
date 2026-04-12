import { useState } from "react";
import { EXAMPLES } from "../../utils/data";
import { Section } from "../Section/Section";
import { TabButton } from "../TabButton/TabButton";
import { Tabs } from "../Tabs/Tabs";

export const Examples = () => {
  const [exampleTitle, setExampleTitle] = useState('');
  const [exampleDescription, setExampleDescription] = useState('');
  const [exampleCode, setExampleCode] = useState('');

  const onClickEventHandler = (event: React.MouseEvent) => {
    const exampleKey = event.currentTarget.textContent.toLowerCase();

    setExampleTitle(EXAMPLES[exampleKey].title);
    setExampleDescription(EXAMPLES[exampleKey].description);
    setExampleCode(EXAMPLES[exampleKey].code);
  };

  return (
    <Section
      id='examples'
      title='Examples'
    >
      <Tabs
        id='examples'
        buttons={
          Object.keys(EXAMPLES).map(exampleKey => (
            <TabButton
              key={EXAMPLES[exampleKey].title}
              isActive={exampleTitle === EXAMPLES[exampleKey].title}
              onClick={onClickEventHandler}
            >
              {EXAMPLES[exampleKey].title}
            </TabButton>
          ))
        }
      >
        {
          exampleTitle ? (
            <div id='tab-content'>
              <h3>{exampleTitle}</h3>
              <p>{exampleDescription}</p>
              <pre>
                <code>{exampleCode}</code>
              </pre>
            </div>
          ) : (
            <p>Please select a topic.</p>
          )
        }
      </Tabs>
    </Section>
  );
};
