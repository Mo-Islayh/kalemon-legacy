import { GET } from "@/utils/network";

interface Params {}

export const getInstructors = async (params: Params | any) => {
  try {
    const res = await GET("instructors", params);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw Error;
  }
};
