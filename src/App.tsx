import "./App.css";
import { Category, Login, Register } from "./pages";
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
        {
          path: "/category",
          element: <Category />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
