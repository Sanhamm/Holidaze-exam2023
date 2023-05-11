import { useState } from "react";

const useApiMehod = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const [data, setData] = useState(null);
  const fetchData = async (url, method, data) => {
    try {
      const postData = {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, postData);
      const json = await response.json();
      setResponse(response);
      setData(json);
      window.location.reload();
    } catch (error) {
      setError(error);
    }
  };

  return [fetchData, response, data, error];
};

export default useApiMehod;
