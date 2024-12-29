import "./Divider.sass";

import { HTMLAttributes } from "react";
import cn from "clsx";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {}

const Divider = ({ className, ...restProps }: DividerProps) => (
  <hr className={cn("Divider", className)} {...restProps} />
);

export default Divider;
