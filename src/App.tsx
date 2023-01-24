import styles from './styles/app.module.css'
import { createGlobalStyle } from 'styled-components'
import { Theme } from './components/settings/themes'
import useApp from './hooks/useApp'
import './styles/index.css'

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
`

function App() {
  const { router, theme } = useApp()
  return (
    <div id='app-container' className={styles.appContainer}>
      <GlobalStyle {...theme} />
      {router}
    </div>
  )
}

export default App
