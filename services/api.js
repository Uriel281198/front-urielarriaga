import axios from "axios";

export const api = axios.create({
  baseURL: process.env.PRODUCCION_BASEURL,
  headers: {
    "X-Parse-Application-Id": process.env.PRODUCCION_APPID,
    "X-Parse-Master-Key": process.env.PRODUCCION_MASTERKEY,
  },
});
