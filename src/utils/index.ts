import { useEffect, useState } from "react";

export const useDebounce = <T>(val: T, delay?: number)=> {
  const [value, setValue] = useState<T>(val);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(val);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [val, delay]);
  return value;
};

export const useArray = <T>(val: T[]) => {
  const [value, setValue] = useState<T[]>(val);
  const add = (data: T) => {
    const arr = [...value, data];
    setValue(arr);
  };
  const clear = () => {
    setValue([]);
  };

  const removeIndex = (index: number) => {
    value.splice(index, 1);
    console.log(value, "val");
    setValue([...value]);
  };

  return {
    value,
    add,
    clear,
    removeIndex,
  };
};
