import { Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'
import Authentication from './components/authentication'
import ForgotPassword from './components/authentication/ForgotPassword'
import Dashboard from './components/dashboard'
import Profile from './components/profile/Profile'
import { Theme } from './components/settings/themes'
import FourZeroFour from './components/uxui/404'
import Logout from './components/authentication/Logout'
import Welcome from './components/authentication/Welcome'
import useApp from './hooks/useApp'
import './styles/index.css'
import FoodPage from './components/food/FoodPage'

const GlobalStyle = createGlobalStyle<Theme>`
    :root {
        color: ${(props) => props.color};
    }
    a {
	    color: ${(p) => p.e};
    }
    a:hover {
        color: ${(p) => p.d};
    }
    body {
        background-color: ${(p) => p.a};
    }
    button {
        border: 1px solid transparent;
        background-color: ${(p) => p.b};
    }
    button:focus, button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
    * {
        box-sizing: border-box;
    }
`

function App() {
  const { theme } = useApp()


  const drawComponent = true;
  if (drawComponent) return <FoodPage />
  return (
    <div id='app-container' className={`w-screen h-screen overflow-hidden`}>
      <GlobalStyle {...theme} />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/auth' element={<Authentication />}>
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
            <Route path='/auth/forgot' element={<ForgotPassword />} />
        </Route>
        <Route path='/info' element={<Welcome />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<FourZeroFour />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  )
}

export default App



