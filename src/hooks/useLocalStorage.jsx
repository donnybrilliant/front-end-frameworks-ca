import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        currentValue = JSON.parse(storedValue);
      } else if (Array.isArray(defaultValue) && defaultValue.length === 0) {
        currentValue = defaultValue;
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        currentValue = defaultValue;
      }
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    if (value === undefined || (Array.isArray(value) && value.length === 0)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  const removeValue = () => setValue(undefined);

  return [value, setValue, removeValue];
};

export default useLocalStorage;
