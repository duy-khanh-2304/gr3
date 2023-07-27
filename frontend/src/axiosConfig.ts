import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL_BE,
  headers: {
    "Content-Type": "application/json"
  }
})

export default axiosInstance