// const fetch = require("node-fetch");

// const baseUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/";

// const serviceKey =
//   "czjc%2FLiXADgQwbo%2BD7wPVIDHrQsrdTly%2FtPY1ISDPgq1b4XfyXD4WryP5J6TNaEsZF9d%2F0%2F10Cto7gia8HcDnA%3D%3D";

// const options = `pageNo=1&numOfRows=30&dataType=JSON`;

// const url = (urlName) => {
//   return baseUrl + `${urlName}?serviceKey=${serviceKey}&option=${options}`;
// };

// export const getUltraWeather = () => {
//   const ultraUrl =
//     baseUrl +
//     `getUltraSrtNcst?serviceKey=${serviceKey}&option=${options}&base_date=20240830&base_time=0600&nx=97&ny=75`;
//   return fetch(ultraUrl).then((res) => res.json());
// };

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "ea117a4577ecf3b022d6eb78cab56b29",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = ({ queryKey }) => {
  // const lat = "35.15826667669885";
  // const lon = "129.06000137329102";
  // console.log(queryKey);
  const [weather, lat, lon] = queryKey;
  // console.log(typeof weather);
  return instance
    .get(`${weather}?lat=${lat}&lon=${lon}`)
    .then((res) => res.data);
};
