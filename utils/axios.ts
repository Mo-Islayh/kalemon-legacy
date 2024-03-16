import axios from "axios";
import Cookies from "js-cookie";
export const api: any = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_SERVER,
});

api.interceptors.request.use((config: any) => {
  // add locale to the header
  const { locale } = config;
  config.headers.lang = locale;

  // Retrieve the access token from the cookie and put it in the header
  const accessToken = Cookies.get("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// Update the locale by calling this function
export const injectStore = (newLocale: any) => {
  // Set the locale in the Axios instance's defaults
  api.defaults.locale = newLocale;
};
