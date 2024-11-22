import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainroot from './Componenets/Main Root/Mainroot';
import Createaccount from './Componenets/Create Account/Createaccount';
import Signin from './Componenets/SignIn Account/Signin';
import Hero from './Componenets/Hero components/Hero';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainroot></Mainroot>,
    errorElement: <h1>404 Error</h1>,
    children:[
      {
        path:"/signup",
        element: <Createaccount></Createaccount>
      },
      {
        path:"/signin",
        element: <Signin></Signin>
      }
    ],
    
  
  },
 
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
