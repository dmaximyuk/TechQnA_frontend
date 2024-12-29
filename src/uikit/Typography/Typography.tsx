import "./Typography.sass";

import { AllHTMLAttributes, ElementType, forwardRef } from "react";
import cn from "clsx";

export interface TypographyProps extends AllHTMLAttributes<HTMLElement> {
  weight?: "1" | "2" | "3";
  caps?: boolean;
  Component?: ElementType;
  plain?: boolean;
  opacity?: boolean;
  center?: boolean;
}

const Typography = forwardRef(
  (
    {
      Component = "p",
      weight = "3",
      plain = true,
      caps = false,
      className = "",
      opacity = false,
      center = false,
      ...restProps
    }: TypographyProps,
    ref,
  ) => (
    <Component
      ref={ref}
      className={cn(
        "Typography",
        `Typography__wrapper--weight-${weight}`,
        opacity && "Typography__wrapper--opacity",
        plain && "Typography__wrapper--plain",
        caps && "Typography__wrapper--caps",
        center && "Typography__wrapper--center",
        className,
      )}
      {...restProps}
    />
  ),
);

export default Typography;
