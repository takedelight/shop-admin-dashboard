import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response?.status === 401 &&
      error.config.url !== "/auth/refresh"
    ) {
      try {
        await api.post("/auth/refresh");
      } catch {
        // refresh failed
      }
    }
    return Promise.reject(error);
  }
);
