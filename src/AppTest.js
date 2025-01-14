import { useContext } from 'react'
import ReactMarkdown from "react-markdown";
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Courses from './components/Courses/Courses'
import './AppIndex.css'


const App = () => {  
  const markdown = `
  # Header 1
  ## Header 2

  _ italic _

  ** bold **

  <b> bold Html </b>
  `;

  return (
    <div className="App">
      <ReactMarkdown source={markdown} />
    </div>
  );
}

export default App
