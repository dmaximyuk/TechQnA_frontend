import "./Card.sass";

import { type AllHTMLAttributes, type FC } from "react";
import cn from "clsx";

import { usePlatform } from "@/hooks";

interface CardProps extends AllHTMLAttributes<HTMLDivElement> {
  radius?: "0" | "10" | "15" | "30";
}

const Card: FC<CardProps> = ({ className, radius = "15", ...props }) => {
  const platform = usePlatform();

  return (
    <div
      className={cn("Card", `Card--${platform}`, className)}
      style={{ "--radius": `${radius}px` } as Record<string, unknown>}
      {...props}
    />
  );
};

export default Card;
