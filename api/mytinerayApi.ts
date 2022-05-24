import axios from "axios";

export const mytineraryApi = axios.create({
  baseURL: "https://mytinerary-adriel.herokuapp.com/api",
});
