import { useState } from "react";

const useApiMethod = () => {
  const [isError, setIsError] = useState(null);
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const [dataInfo, setDataInfo] = useState(null);
  const [response, setResponse] = useState(null);
  const name = JSON.parse(localStorage.getItem("name"));

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
      console.log(json.avatar);
      console.log(response);
      setDataInfo(json);
      setResponse(response);
    } catch (error) {
      setIsError(error);
    }
    if (method === "DELETE") {
      window.location.href = `/Profile/${name}`;
    }
  };

  return [fetchData, dataInfo, isError, response];
};

export default useApiMethod;
