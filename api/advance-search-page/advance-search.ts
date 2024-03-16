import { GET } from "@/utils/network";

export const advanceSearch = async (params: any) => {
  try {
    const res = await GET("search", params);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw Error;
  }
};

export const getCoursesLevels = async () => {
  try {
    const res = await GET("levels");
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw Error;
  }
};
