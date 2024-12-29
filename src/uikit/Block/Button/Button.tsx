import "./Button.sass";

import { AllHTMLAttributes, ElementType, forwardRef, ReactNode } from "react";
import cn from "clsx";

import { hasReactNode } from "@/helpers";
import { usePlatform } from "@/hooks";

import { Tappable, ButtonTypography, Spinner } from "@/uikit";

export interface ButtonProps
  extends Omit<AllHTMLAttributes<HTMLButtonElement>, "size"> {
  before?: ReactNode;
  after?: ReactNode;
  size?: "s" | "m" | "l";
  stretched?: boolean;
  mode?: "filled" | "bezeled" | "plain" | "gray" | "outline" | "white";
  loading?: boolean;
  disabled?: boolean;
  Component?: ElementType;
}

const Button = forwardRef(
  (
    {
      type,
      size = "m",
      before,
      after,
      stretched,
      children,
      className,
      mode = "filled",
      loading,
      Component = "button",
      ...restProps
    }: ButtonProps,
    ref,
  ) => {
    const platform = usePlatform();

    return (
      <Tappable
        ref={ref}
        type={type || "button"}
        Component={Component}
        className={cn(
          "Button",
          `Button--${mode}`,
          `Button--${size}`,
          platform === "ios" && "Button--ios",
          stretched && "Button--stretched",
          loading && "Button--loading",
          className,
        )}
        {...restProps}
      >
        {loading && <Spinner className="Button--spinner" size="s" />}
        {hasReactNode(before) && <div className="Button__before">{before}</div>}
        <ButtonTypography className="Button__content" size={size}>
          {children}
        </ButtonTypography>
        {hasReactNode(after) && <div className="Button__after">{after}</div>}
      </Tappable>
    );
  },
);

export default Button;
