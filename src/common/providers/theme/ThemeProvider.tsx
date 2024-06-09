import { ReactNode, createContext, useContext, useEffect, useState } from "react"
// import { useLocalStarage } from "../../hooks/useLocalStorage"
export interface IThemeContext {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('no context')
  }

  return context
}

type Props = {
  children: ReactNode
}

export const ThemeProvider = ({ 
  children 
}: Props) => {
  // const [theme, setTheme] = useLocalStarage('theme', 'light')
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}