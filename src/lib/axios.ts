import Axios from "axios";

import { toast } from "react-toastify";

Axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    toast.error(message);

    return Promise.reject(error);
  }
);

export default Axios;
