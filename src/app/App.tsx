import './App.css'
import { ThemeProvider } from '../common/providers/theme/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from '../common/router'

function App() {
  
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
export default App
