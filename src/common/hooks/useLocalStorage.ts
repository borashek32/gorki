import { useEffect, useState } from "react"

export const useLocalStarage = (key: string, defaultValue: string) => {
  // const setItem = (value: unknown) => {
  //   localStorage.setItem(key, JSON.stringify(value))
  // }

  // const getItem = (value: string) => {
  //   const storedValue = localStorage.getItem(value)
  //   return storedValue ? JSON.parse(storedValue) : null
  // }

  // return { 
  //   setItem, 
  //   getItem 
  // }

  const [state, setState] = useState(() => {
    const localData = localStorage.getItem(key)
    return localData || defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}