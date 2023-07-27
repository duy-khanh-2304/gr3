import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL_BE ?? "http://3.25.107.114:1337/",
  headers: {
    "Content-Type": "application/json"
  }
})

export default axiosInstance