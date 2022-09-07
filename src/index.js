import { render } from 'react-dom'
import App from './AppTest'
import { ThemeProvider } from './contexts/theme'
import './index.css'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
