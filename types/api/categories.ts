export interface ICategories {
  current_page: number;
  data: ICategories_Data[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ICategories_Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface ICategories_Data {
  id: number;
  name: string;
  slug: string;
  description: string;
  parents: any;
  childs: any[];
}

export interface ICategories_Link {
  url?: string;
  label: string;
  active: boolean;
}
