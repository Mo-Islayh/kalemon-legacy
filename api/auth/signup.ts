import Cookies from "js-cookie";
import { POST } from "@/utils/network";
import { AxiosError } from "axios";

interface Payload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone: string;
  phone_country: string;
}

export const signUp = async (userData: Payload) => {
  try {
    const res = await POST("register", userData);
    if (res.status === 201) {
      const accessToken = res.data.token;
      Cookies.set("accessToken", accessToken);
      return res.data;
    }
  } catch (error: any) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data);
    } else {
      throw Error;
    }
  }
};
