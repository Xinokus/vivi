import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './header/header'
import Main from './main/main'
import Footer from './footer/footer'
import PageLoad from './page-load/page-load'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageLoad/>
    <Header/>
    <Main/>
    <Footer/>
  </StrictMode>,
)
