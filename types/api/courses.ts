export interface ICourses {
  current_page: number;
  data: ICourses_Data[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ICourses_Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface ICourses_Data {
  id: number;
  name: string;
  slug: string;
  description: string;
  keyword: string;
  average_rating: number;
  number_of_user_rating: number;
  image: string;
  duration: number;
  has_multiple_price: boolean;
  price: number;
  new_price: number;
  teacher: ICourses_Data_Teacher;
  category: ICourses_Data_Category;
  level: ICourses_Data_Level;
}

export interface ICourses_Data_Teacher {
  id: number;
  name: string;
  image: string;
  username: string;
}

export interface ICourses_Data_Category {
  id: number;
  name: string;
  slug: string;
}

export interface ICourses_Data_Level {
  id: number;
  name: string;
  slug: string;
}

export interface ICourses_Link {
  url?: string;
  label: string;
  active: boolean;
}
