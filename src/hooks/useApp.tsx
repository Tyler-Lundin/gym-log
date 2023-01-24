import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import Dashboard from '../components/dashboard/'
import InfoCard from '../components/authentication/Welcome'
import Authentication from '../components/authentication'
import useTheme from '../hooks/useTheme'
import FourZeroFour from '../components/uxui/404'
import SeeYa from '../components/uxui/SeeYa'
import Login from '../components/authentication/Login'
import Register from '../components/authentication/Register'
import useAuth from '../hooks/useAuth'
import { useEffect } from 'react'
import ForgotPassword from '../components/authentication/ForgotPassword'

const useApp = () => {
  const { theme } = useTheme()
  const { isAuth } = useAuth()
  const navTo = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!isAuth && pathname === '/') navTo('/auth/login')
  }, [isAuth, pathname, navTo])

  const router = useRoutes([
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/auth',
      element: <Authentication />,
      children: [
        {
          path: '/auth/login',
          element: <Login />,
        },
        {
          path: '/auth/register',
          element: <Register />,
        },
        {
          path: '/auth/forgot',
          element: <ForgotPassword />,
        },
      ],
    },
    {
      path: '/info',
      element: <InfoCard />,
    },
    {
      path: '*',
      element: <FourZeroFour />,
    },
    {
      path: '/seeya',
      element: <SeeYa />,
    },
  ])

  return { router, theme }
}

export default useApp
