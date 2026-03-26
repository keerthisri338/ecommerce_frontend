import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-d153.up.railway.app/api"
});

export default API;
