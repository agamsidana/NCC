import { Outlet } from 'react-router-dom'
import { Footer, Header, ScrollToTop } from '../common/components'
import { CartDrawer } from '../modules/cart'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />

      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <CartDrawer />
    </div>
  )
}

export default MainLayout
