import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Posts from '../components/posts/Posts.jsx';
import NewPosts from '../components/newposts/NewPosts.jsx';
import { GlobalStyle } from './globalStyle/GlobalStyle.js';
import OtherPath from '../components/other/OtherPath.jsx';
import { ApolloProvider } from '@apollo/client';
import { client } from '../Appolo.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>erro the page doest exist 404</h1>,
    children: [
      {
        path: '/',
        element: <Posts />,
      },
      {
        path: '/posts',
        element: <Posts />,
        index: true
      }, {
        path: "/new-post",
        element: <NewPosts />
      }
    ]

  }, {
    path: "/other",
    element: <OtherPath />

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ApolloProvider>
    {/* <App /> */}

  </React.StrictMode>,
)
