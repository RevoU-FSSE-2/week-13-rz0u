import "./App.css";
import { Login, Register } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicLayout } from "./layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
