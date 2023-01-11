import styles from "./styles/app.module.css";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import InfoCard from "./components/Hero";
import Authentication from "./components/authentication";
import { createGlobalStyle } from "styled-components";
import { Theme } from "./components/settings/themes";
import useTheme from './hooks/useTheme';
import FourZeroFour from './components/uxui/404';
import SeeYa from './components/uxui/SeeYa';
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";
import ForgotPassword from "./components/authentication/ForgotPassword";


const GlobalStyle = createGlobalStyle<Theme>`
:root {
    color: ${(props) => props.color};
}
a {
	color: ${(p)=>p.e};
}
a:hover {
  color: ${(p)=>p.d};
}
body {
  background-color: ${(p)=>p.a};
  }
button {
  border: 1px solid transparent;
  background-color: ${(p)=>p.b};
}
button:hover {
  border-color: ${(p)=>p.e};
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`;

function App() {
	const { theme } = useTheme();
    const { isAuth } = useAuth();
    const navTo = useNavigate();
    const { pathname } = useLocation();


    useEffect(() => {
        if ( !isAuth && pathname === '/' ) navTo('/auth/login');
    }, [isAuth, pathname, navTo]);

	const router = useRoutes([
		{
			path: "/",
			element: <Dashboard />
		},
        {
            path: '/auth',
            element: <Authentication />,
            children: [
                 {
                    path: '/auth/login',
                    element: <Login />
                 },
                {
                    path: '/auth/register',
                    element: <Register />
                },
                {
                    path: '/auth/forgot',
                    element: <ForgotPassword />
                },
            ]
        },
		{
			path: "/info",
			element: <InfoCard />,
		},
		{
			path: "*",
			element: <FourZeroFour />
		},
        {
            path: "/seeya",
            element: <SeeYa />
        },
	]);
	return (
		<div id="app-container" className={styles.appContainer}>
			<GlobalStyle {...theme} />
			{router}
		</div>
	);
}

export default App;
