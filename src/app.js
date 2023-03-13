import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PAbout from './pages/ProgrammingPage';
import PMain from './pages/MainPage';
import MyHeader from './Components/CHeader';
import ErrorPage from './Components/error-page';

import './styles/App.css'


const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <PMain />,
      errorElement: <ErrorPage />,
    },
    {
    path: "/programming",
      element: <PAbout />,
    }
  ]);
const App = (props) => {        
    return(
        <React.StrictMode>
            <MyHeader/>
            <RouterProvider router={mainRouter} />
        </React.StrictMode>
    )
}
export default App;