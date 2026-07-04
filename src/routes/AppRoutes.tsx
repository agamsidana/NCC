import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { AboutPage } from '../modules/about'
import { HomePage } from '../modules/home'
import NotFoundPage from '../modules/not-found/NotFoundPage'

const router=createBrowserRouter( [
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about-ncc', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])


function AppRoutes() {
  return <RouterProvider router={router} />
}

export default AppRoutes
