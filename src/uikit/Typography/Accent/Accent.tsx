import "./Accent.sass";

import { type FC } from "react";
import cn from "clsx";

import { Typography, type TypographyProps } from "@/uikit";

export interface AccentProps extends Omit<TypographyProps, "plain"> {}

const Accent: FC<AccentProps> = ({ className = "", ...props }) => (
  <Typography
    {...props}
    className={cn("Accent", className)}
    Component={"span"}
  />
);

export default Accent;
