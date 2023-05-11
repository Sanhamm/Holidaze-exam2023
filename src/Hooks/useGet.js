import React, { useState } from "react";

const useGet = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const getData = async (url) => {
    try {
      const postData = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, postData);
      const json = await response.json();
      console.log(response);
      setData(json);
    } catch (err) {
      setError(err);
    }
  };

  return [getData, data, error];
};

export default useGet;
