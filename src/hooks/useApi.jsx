import { useState, useEffect } from "react";

// Custom React hook, which fetch data from a provided URL and provides error handling and loading states
function useApi(url) {
  // use React's useState hooks to setup states for data, loading and error
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // async function to fetch data
  const getData = async () => {
    try {
      // fetch data from the provided URL
      const fetchedData = await fetch(url);

      // if the response is not ok throw an error
      if (!fetchedData.ok) {
        throw new Error(fetchedData.status);
      }

      // no error, so parse the response to json
      const json = await fetchedData.json();

      // update the data state with the fetched data
      setData(json);
    } catch (error) {
      // update the loading and error state, and log the error
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    } finally {
      // update the loading state to indicate that the loading has stopped
      setIsLoading(false);
    }
  };

  // use React's useEffect hook to perform the data fetching when the url changes
  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, isError };
}

export default useApi;
