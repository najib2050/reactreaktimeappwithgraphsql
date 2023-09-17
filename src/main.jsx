import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Heade from '../components/header/Heade.jsx';



const router= createBrowserRouter([
  {
    path: "/",
    element:<Heade/>,
    errorElement:<h1>erro the page doest exist 404</h1>

  },
  {
    path:'/posts',
    element:<div>posts page</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
