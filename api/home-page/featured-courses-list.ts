import { GET } from "@/utils/network";
import { ICategories } from "@/types/api/categories";
import { ICourses } from "@/types/api/courses";

export const getCoursesCategories = async () => {
  try {
    const res = await GET("categories");
    if (res.status === 200) {
      return res.data as ICategories;
    }
  } catch (error) {
    throw Error;
  }
};

interface Params {
  term?: string;
  page?: number;
  category_id?: number;
}
export const getCourses = async (params: Params) => {
  try {
    const res = await GET("courses", params);
    if (res.status === 200) {
      return res.data as ICourses;
    }
  } catch (error) {
    throw Error;
  }
};
