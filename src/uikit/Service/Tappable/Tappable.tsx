import "./Tappable.sass";

import { type AllHTMLAttributes, type ElementType, forwardRef } from "react";
import cn from "clsx";

import { usePlatform, useRipple } from "@/hooks";

import { Ripple } from "@/uikit";

export interface TappableProps extends AllHTMLAttributes<HTMLElement> {
  Component?: ElementType;
  interactiveAnimation?: "opacity" | "background";
}

const Tappable = forwardRef(
  (
    {
      Component = "div",
      children,
      className,
      interactiveAnimation = "background",
      readOnly,
      ...restProps
    }: TappableProps,
    ref,
  ) => {
    const platform = usePlatform();
    const { clicks, onPointerCancel, onPointerDown } = useRipple();

    const hasRippleEffect =
      platform === "android" &&
      interactiveAnimation === "background" &&
      !readOnly;

    return (
      <Component
        ref={ref}
        className={cn(
          "Tappable",
          platform === "ios" && "Tappable--ios",
          interactiveAnimation === "opacity" && "Tappable--opacity",
          className,
        )}
        onPointerCancel={onPointerCancel}
        onPointerDown={onPointerDown}
        readOnly={readOnly}
        {...restProps}
      >
        {hasRippleEffect && <Ripple clicks={clicks} />}
        {children}
      </Component>
    );
  },
);

export default Tappable;
