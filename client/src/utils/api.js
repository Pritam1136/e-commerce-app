/* eslint-disable no-unused-vars */
import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer" + process.env.STRAPI_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (error) {
    return error;
  }
};
