import { LoginForm } from "../../components";
import { LoginForm as LoginFormProps, LoginResponse } from "../../types";

const Login = () => {
  const onSubmit = async (data: LoginFormProps) => {
    const fetching = await fetch(
      "https://mock-api.arikmpt.com/api/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const response: LoginResponse = await fetching.json();
    if (response) {
      localStorage.setItem("token", response.data.token);
      window.location.replace("/category");
      console.log(response);
    }
  };

  return <LoginForm onSubmit={onSubmit} />;
};

export default Login;
