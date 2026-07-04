import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import AppRoutes from './routes/AppRoutes'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <AppRoutes />
      </HelmetProvider>
    </Provider>
  )
}

export default App
