import { useState, useEffect } from "react";
const useApi = (url) => {
  const [data, setData] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
        setDataInfo(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);
  return { data, dataInfo, isLoading, isError };
};
export default useApi;
