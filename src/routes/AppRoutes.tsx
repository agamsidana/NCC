import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { AboutPage } from '../modules/about'
import { CartPage } from '../modules/cart'
import { FindYourRitualPage } from '../modules/find-your-ritual'
import { HomePage } from '../modules/home'
import { ContactPage, FaqPage, InfoPage } from '../modules/info'
import NotFoundPage from '../modules/not-found/NotFoundPage'
import { ProductPage } from '../modules/product'
import { RecipesPage } from '../modules/recipes'
import { ReviewsPage } from '../modules/reviews'
import { SciencePage } from '../modules/science'
import { GiftSetsPage, ShopPage } from '../modules/shop'
import strings from '../common/constants/strings'

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
      { path: 'products/:slug', element: <ProductPage /> },
      { path: 'reviews', element: <ReviewsPage /> },
      { path: 'find-your-ritual', element: <FindYourRitualPage /> },
      { path: 'cart', element: <CartPage /> },
      {
        path: 'why-ceylon-matters',
        element: <InfoPage content={strings.infoPages.whyCeylonMatters} path="/why-ceylon-matters" />,
      },
      {
        path: 'shipping-returns',
        element: <InfoPage content={strings.infoPages.shippingReturns} path="/shipping-returns" />,
      },
      {
        path: 'privacy-policy',
        element: <InfoPage content={strings.infoPages.privacyPolicy} path="/privacy-policy" />,
      },
      {
        path: 'terms-of-service',
        element: <InfoPage content={strings.infoPages.termsOfService} path="/terms-of-service" />,
      },
      {
        path: 'cookie-policy',
        element: <InfoPage content={strings.infoPages.cookiePolicy} path="/cookie-policy" />,
      },
      { path: 'faq', element: <FaqPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])


function AppRoutes() {
  return <RouterProvider router={router} />
}

export default AppRoutes
