import { Outlet } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { GithubContextProvider } from './contexts/githubContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />
      <GithubContextProvider>
        <Outlet />
      </GithubContextProvider>
    </ThemeProvider>
  )
}

export default App
