/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endPoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    makeApiCall();
  }, [endPoint]);

  const makeApiCall = async () => {
    const res = await fetchDataFromApi(endPoint);
    setData(res);
  };

  return { data };
};

export default useFetch;
