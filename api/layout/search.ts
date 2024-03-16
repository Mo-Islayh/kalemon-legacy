import { GET } from "@/utils/network";

export const getSearch = async (params: any) => {
  try {
    const res = await GET("search", params);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw Error;
  }
};
