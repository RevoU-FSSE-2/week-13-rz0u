export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    token: string;
  };
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  data: {
    name: string;
    email: string;
    password: string;
  };
}

export interface Category {
  id: string;
  name: string;
  is_active: boolean;
}

export interface GetCategoryResponse {
  data: Category[];
  current_page: number;
  total_item: number;
  total_page: number;
}
