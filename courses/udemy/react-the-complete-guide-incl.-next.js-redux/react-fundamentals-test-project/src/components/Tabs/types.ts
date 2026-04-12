
export interface TabsProps extends React.ComponentProps<'menu'>, React.PropsWithChildren {
  ButtonsContainer?: React.ElementType;
  buttons: React.ReactNode[];
}
