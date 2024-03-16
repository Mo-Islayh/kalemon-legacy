import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { POST } from "@/utils/network";

export const login = async (userData: any) => {
  try {
    const res = await POST("login", userData);

    if (res.status === 200) {
      // get the token from the res
      const accessToken = res.data.token;
      // Store the access token in a secure cookie
      Cookies.set("accessToken", accessToken, {
        secure: true,
        sameSite: "strict",
        httpOnly: true,
      });

      return accessToken;
    }
  } catch (error) {
    throw Error;
  }
};
