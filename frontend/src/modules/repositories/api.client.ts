import axios from "axios";

// TODO: move to .env
const host = "http://localhost:4000";

const apiClient = axios.create({
  baseURL: host,
});

export default apiClient;
