import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/CSS/reset.css";
import './index.css';
import About from './pages/About.jsx';
import Authentication from './pages/Authentication.jsx'
import Landing from './pages/Landing.jsx'
import ErrorPage from './pages/Error.jsx'
import Questions from './pages/Questions.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'auth',
        element: <Authentication />,
      },
      {
        path: 'questions',
        element: <Questions />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
