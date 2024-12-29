import { useEffect, useState } from "react";

type Platform = "android" | "ios";

const usePlatform = (): Platform => {
  const [platform, setPlatform] = useState<Platform>("android");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const userAgent = navigator.userAgent.toLowerCase();
      const platform = navigator.platform.toLowerCase();

      if (
        /mac|iphone|ipad|ipod/.test(platform) ||
        /mac|iphone|ipad|ipod/.test(userAgent)
      ) {
        setPlatform("ios");
      } else {
        setPlatform("android");
      }
    }
  }, []);

  return platform;
};

export default usePlatform;
