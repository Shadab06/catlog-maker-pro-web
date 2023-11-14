import axios from "axios";
const api = "https://tworingz.com/waqf/api/";

export const API = axios.create({
  baseURL: api,
});