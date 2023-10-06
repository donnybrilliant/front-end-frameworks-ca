import { useState, useEffect } from "react";

function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetch(url);
        if (!fetchedData.ok) {
          throw new Error(fetchedData.status);
        }
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, isError };
}

export default useApi;
