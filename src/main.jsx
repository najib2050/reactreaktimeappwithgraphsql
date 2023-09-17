import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router= createBrowserRouter([
  {
    path: "/",
    element:<div>hello world!</div>,
    errorElement:<h1>erro the page doest exist 404</h1>

  },
  {
    path:'/about',
    element:<div>about page</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
