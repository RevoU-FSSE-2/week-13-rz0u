export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginResponse {
  name: string;
  email: string;
  password: string;
  token: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  name: string;
  email: string;
  password: string;
}
