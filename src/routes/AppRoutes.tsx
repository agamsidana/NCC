import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { AboutPage } from '../modules/about'
import { HomePage } from '../modules/home'
import NotFoundPage from '../modules/not-found/NotFoundPage'
import { RecipesPage } from '../modules/recipes'
import { SciencePage } from '../modules/science'
import { GiftSetsPage, ShopPage } from '../modules/shop'

const router=createBrowserRouter( [
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about-ncc', element: <AboutPage /> },
      { path: 'the-science', element: <SciencePage /> },
      { path: 'recipes', element: <RecipesPage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'shop/gift-sets', element: <GiftSetsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])


function AppRoutes() {
  return <RouterProvider router={router} />
}

export default AppRoutes
