import type { TabsProps } from "./types";

export const Tabs = ({
  ButtonsContainer = 'menu',
  buttons,
  children,
  ...rest
}: TabsProps) => {
  return (
    <>
      <ButtonsContainer {...rest}>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
};
