import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/AboutPage';
import App from './pages/MainPage';
import MyHeader from './Components/CHeader';
import './styles/App.css'


const mainRouter = createBrowserRouter([
    {
      path: "/main",
      element: <App />,
    },
  ]);
const aboutRouter = createBrowserRouter([
    {
      path: "/about",
      element: <About />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <MyHeader/>
      <RouterProvider router={mainRouter} />
      <RouterProvider router={aboutRouter} />
    </React.StrictMode>
);
