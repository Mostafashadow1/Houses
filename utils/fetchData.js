import axios from "axios";
axios.defaults.baseURL = "https://bayut.p.rapidapi.com";
export const getData = async (url) => {
  const res = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
    },
  });
  return res.data;
};
