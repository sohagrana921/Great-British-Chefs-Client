import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

import ChefRecipes from "./components/ChefRecipes";
import AboutUS from "./components/AboutUS";
import AuthProvider from "./providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <AboutUS></AboutUS>,
      },

      {
        path: "/chefrecipes/:id",
        element: <ChefRecipes></ChefRecipes>,
        loader: () => fetch("http://localhost:4000/chefs"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
