import { type FC } from "react";

import { Text, Subheadline, type TypographyProps } from "@/uikit";

export interface ButtonTypographyProps extends Omit<TypographyProps, "size"> {
  size: "s" | "m" | "l";
}

const ButtonTypography: FC<ButtonTypographyProps> = ({
  size,
  ...restProps
}) => {
  if (size === "l") {
    return <Text weight="2" {...restProps} />;
  }

  return <Subheadline level="2" weight="2" {...restProps} />;
};

export default ButtonTypography;
