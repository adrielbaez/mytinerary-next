import { useState, useEffect } from "react";

export const useDebouncedSearch = (input: string = "", time: number = 500) => {
  const [debouncedSearch, setDebouncedSearch] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input, time]);

  return debouncedSearch;
};
