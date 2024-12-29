import "./Image.sass";

import { type AllHTMLAttributes, type FC } from "react";
import cn from "clsx";

interface ImageProps extends AllHTMLAttributes<HTMLImageElement> {
  src: string;
}

const Image: FC<ImageProps> = ({ alt = "", className, ...props }) => {
  return <img {...props} className={cn("Icon", className)} alt={alt} />;
};

export default Image;
