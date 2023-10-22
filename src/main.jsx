import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Root from './components/Root/Root'
import Donations from './components/Donations/Donations'
import Statistics from './components/Statistics/Statistics'
import DonationItem from './components/DonationItem/DonationItem'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: () => fetch('/data.json'),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:category/:paramId',
        element: <DonationItem />
      },
      {
        path: '/donation',
        element: <Donations />,
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
