import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL_BE ?? "https://6e09-3-27-123-191.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json"
  }
})

export default axiosInstance