import "./Tag.sass";

import { type FC } from "react";
import cn from "clsx";

import { Caption } from "@/uikit";

interface TagProps {
  children: string;
}

const Tag: FC<TagProps> = (props) => {
  return (
    <div className={cn("Tag", "Tag--default")}>
      <Caption weight="2">{props.children}</Caption>
    </div>
  );
};

export default Tag;
