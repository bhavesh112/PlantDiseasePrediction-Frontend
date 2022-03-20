import axios from "axios";

const api = axios.create({
  baseURL: "https://predict2105.herokuapp.com/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default api;
