const fetch = require("node-fetch");

const baseUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/";

const serviceKey =
  "czjc%2FLiXADgQwbo%2BD7wPVIDHrQsrdTly%2FtPY1ISDPgq1b4XfyXD4WryP5J6TNaEsZF9d%2F0%2F10Cto7gia8HcDnA%3D%3D";

const options = `pageNo=1&numOfRows=30&dataType=JSON`;
