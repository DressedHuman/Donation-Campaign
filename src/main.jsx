import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Root from './components/Root/Root'
import Donation from './components/Donation/Donation'
import Statistics from './components/Statistics/Statistics'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/data.json')
      },
      {
        path: '/donation',
        element: <Donation />
      },
      {
        path: '/statistics',
        element: <Statistics />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
