"use client";

import { useCallback, useEffect, useRef } from "react";

const useTimeout = (callbackFunction: () => void, duration: number) => {
  const options = useRef({ callbackFunction, duration });

  useEffect(() => {
    options.current.callbackFunction = callbackFunction;
    options.current.duration = duration;
  }, [callbackFunction, duration]);

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = useCallback(
    () => timeout.current && clearTimeout(timeout?.current),
    [],
  );

  const set = useCallback(() => {
    clear();
    timeout.current = setTimeout(
      options.current.callbackFunction,
      options.current.duration,
    );
  }, [clear]);

  return { set, clear };
};

export default useTimeout;
