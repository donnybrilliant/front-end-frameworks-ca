import { useState, useEffect } from "react";

function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, isError };
}

export default useApi;
