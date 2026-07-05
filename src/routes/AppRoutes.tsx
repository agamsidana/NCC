import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { AboutPage } from '../modules/about'
import { CartPage } from '../modules/cart'
import { FindYourRitualPage } from '../modules/find-your-ritual'
import { GrowersPage } from '../modules/growers'
import { HomePage } from '../modules/home'
import { ContactPage, FaqPage, InfoPage } from '../modules/info'
import NotFoundPage from '../modules/not-found/NotFoundPage'
import { ProductPage } from '../modules/product'
import { RecipeDetailPage, RecipesPage } from '../modules/recipes'
import { ReviewsPage } from '../modules/reviews'
import { RitualGuidePage } from '../modules/ritual-guides'
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
      { path: 'recipes/:slug', element: <RecipeDetailPage /> },
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
      { path: 'our-growers', element: <GrowersPage /> },
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
      {
        path: 'coffee-ritual-guide',
        element: <RitualGuidePage guide={strings.ritualGuides.coffee} path="/coffee-ritual-guide" />,
      },
      {
        path: 'golden-chai-ritual-guide',
        element: (
          <RitualGuidePage guide={strings.ritualGuides.goldenChai} path="/golden-chai-ritual-guide" />
        ),
      },
      {
        path: 'metabolic-cinnamon-guide',
        element: (
          <RitualGuidePage
            guide={strings.ritualGuides.metabolicCinnamon}
            path="/metabolic-cinnamon-guide"
          />
        ),
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])


function AppRoutes() {
  return <RouterProvider router={router} />
}

export default AppRoutes
