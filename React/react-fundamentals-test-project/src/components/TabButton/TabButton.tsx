import type { TabProps } from "./types";

export const TabButton = ({
  isActive,
  children,
  ...rest
}: TabProps) => {
  return (
    <li>
      <button
        className={isActive ? 'active' : undefined}
        {...rest}
      >
        {children}
      </button>
    </li>
  );
};
