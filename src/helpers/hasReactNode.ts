import { type ReactNode } from "react";

const hasReactNode = (value: ReactNode): boolean => {
  return (
    value !== undefined && value !== false && value !== null && value !== ""
  );
};

export default hasReactNode;
