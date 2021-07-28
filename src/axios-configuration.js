import axios from "axios";

const http = axios.create({

  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem("id");
      window.location.href = "/login";
    } else {
      return Promise.reject(err);
    }
  }
);

export default http;
