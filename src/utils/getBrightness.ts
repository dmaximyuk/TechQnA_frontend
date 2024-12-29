import { hexToRgb } from "@/utils";

export const getBrightness = (hex: string) => {
  const { r, g, b } = hexToRgb(hex);
  const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return brightness > 128 ? "light" : "dark";
};
