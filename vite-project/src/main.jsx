import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './header/header'
import Main from './main/main'
import Footer from './footer/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </StrictMode>,
)
