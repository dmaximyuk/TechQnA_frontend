import "./Ripple.sass";

import { type FC } from "react";

import { Wave } from "@/models";

export interface RippleProps {
  clicks: Wave[];
}

const Ripple: FC<RippleProps> = ({ clicks }: RippleProps) => (
  <span aria-hidden className={"Ripple"}>
    {clicks.map((wave) => (
      <span
        key={wave.date}
        className={"Ripple__wave"}
        style={{
          top: wave.y,
          left: wave.x,
        }}
      />
    ))}
  </span>
);

export default Ripple;
