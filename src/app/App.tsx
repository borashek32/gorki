import './App.css'
import { ThemeProvider } from '../common/providers/theme/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from '../common/router'
import { Provider } from 'react-redux'
import { store } from '../common/providers/model/store'

function App() {
  
  return (
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  )
}
export default App
