import { Outlet } from 'react-router-dom'
import { Header } from '../common/components'
import { strings } from '../common/constants'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-200 py-6 text-center text-sm text-neutral-500">
        {strings.layout.footer.copyright(new Date().getFullYear())}
      </footer>
    </div>
  )
}

export default MainLayout
