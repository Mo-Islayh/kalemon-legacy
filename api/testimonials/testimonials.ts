import { GET } from "@/utils/network";

export const getTestimonials = async (params: any) => {
  try {
    const res = await GET("testimonials", params);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw Error;
  }
};
