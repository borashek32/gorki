import { ReactElement, createContext, useEffect } from "react"
import { useLocalStarage } from "../../hooks/useLocalStorage"

export const ThemeContext = createContext()

type Props = {
  children: ReactElement | ReactElement[]
}

export const ThemeProvider = ({ 
  children 
}: Props) => {
  const [theme, setTheme] = useLocalStarage('theme', 'light')
  
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}