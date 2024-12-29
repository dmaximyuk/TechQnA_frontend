import "./Icon.sass";

import { type AllHTMLAttributes, type FC, type ReactNode } from "react";
import cn from "clsx";

import { Image } from "@/uikit";

interface IconProps
  extends Omit<AllHTMLAttributes<HTMLElement>, "size" | "src"> {
  size?: "18" | "24" | "32" | "36" | "42";
  src: ReactNode;
}

const Icon: FC<IconProps> = ({
  size = "18",
  className = "",
  src,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn("Icon", className)}
      style={{ "--size": `${size}px` } as Record<string, unknown>}
    >
      {typeof src === "string" ? <Image src={src} /> : src}
    </div>
  );
};

export default Icon;
