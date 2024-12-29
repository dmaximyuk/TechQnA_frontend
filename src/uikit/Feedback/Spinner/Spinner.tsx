import "./Spinner.sass";

import { HTMLAttributes } from "react";
import cn from "clsx";

import { usePlatform } from "@/hooks";

import { IconAndroidSpinner, IconIOSSpinner } from "@/assets/icons";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size: "s" | "m" | "l";
}

const Spinner = ({ size = "m", className }: SpinnerProps) => {
  const platform = usePlatform();
  const Component = platform === "ios" ? IconIOSSpinner : IconAndroidSpinner;

  return (
    <div
      role="status"
      className={cn(
        "Spinner",
        `Spinner--${size}`,
        platform === "ios" && "Spinner--ios",
        className,
      )}
    >
      <Component />
    </div>
  );
};

export default Spinner;
