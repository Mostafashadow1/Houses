import axios from "axios";
axios.defaults.baseURL = "https://bayut.p.rapidapi.com";
export const getData = async (url) => {
  const res = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return res.data;
};
