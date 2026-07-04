import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { HomePage } from '../modules/home'
import NotFoundPage from '../modules/not-found/NotFoundPage'

const router=createBrowserRouter( [
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])


function AppRoutes() {
  return <RouterProvider router={router} />
}

export default AppRoutes
