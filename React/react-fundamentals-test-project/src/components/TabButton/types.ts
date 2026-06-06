import type React from "react";

export interface TabProps extends React.PropsWithChildren {
  isActive: boolean;
  onClick: React.EventHandler<any>;
}
