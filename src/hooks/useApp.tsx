import useTheme from '../hooks/useTheme'
import useAuth from '../hooks/useAuth'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const useApp = () => {
  const { theme } = useTheme()
  const { isAuth } = useAuth()
  const navTo = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!isAuth && pathname === '/') navTo('/auth/login')
  }, [isAuth, pathname, navTo])

  return { theme }
}

export default useApp
