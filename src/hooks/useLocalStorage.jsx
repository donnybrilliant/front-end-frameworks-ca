import { useState, useEffect } from "react";

// Custom React hook to use local storage
const useLocalStorage = (key, defaultValue) => {
  // Retrieve the value from local storage or use the default value
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        currentValue = JSON.parse(storedValue);
      } else if (Array.isArray(defaultValue) && defaultValue.length === 0) {
        currentValue = defaultValue;
      } else {
        // If no value is found in local storage, set it to the default value
        localStorage.setItem(key, JSON.stringify(defaultValue));
        currentValue = defaultValue;
      }
    } catch (error) {
      // Handle any errors (e.g., parsing JSON)
      currentValue = defaultValue;
    }

    return currentValue;
  });

  // Update local storage whenever the value changes
  useEffect(() => {
    if (value === undefined || (Array.isArray(value) && value.length === 0)) {
      // Remove the key if the value is undefined or an empty array
      localStorage.removeItem(key);
    } else {
      // Store the value in local storage
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  // Function to remove the value from local storage
  const removeValue = () => setValue(undefined);

  // returns value, functions to set and remove values so they can be used by the component that calls this hook
  return [value, setValue, removeValue];
};

export default useLocalStorage;
