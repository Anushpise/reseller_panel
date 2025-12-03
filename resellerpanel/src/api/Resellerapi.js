
import axios from "../Utils/axiosInstance";

export const registerReseller = (data) => axios.post("/reseller/register", data);
export const loginReseller = (data) => axios.post("/reseller/login", data);
export const updateGSTAPI = (data) =>
  axios.put("/reseller/update-gst", data);

export const logoutReseller = () => axios.post("/reseller/logout");
export const updateProfileAPI = (data) =>
  axios.put("/reseller/update-profile", data);

export const changePasswordAPI = (data) =>
  axios.put("/reseller/change-password", data);