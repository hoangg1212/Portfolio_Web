import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './pages/Banner'
import About from './pages/About'
import Service from './pages/Service'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

import './i18n';
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='pt-10'>
        <Banner />
        <About />
        <Service />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton/>
    </>
  )
}

export default App
