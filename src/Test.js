import { render } from 'react-dom'
import { ThemeProvider } from './contexts/theme'
import App from './AppTest'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
