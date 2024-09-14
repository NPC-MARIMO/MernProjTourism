import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AllRoute from './AllRoute'
import { BrowserRouter } from 'react-router-dom'
import About from './About'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='dark:bg-slate-100  '>
    <AllRoute/>

    </div>
   
  </BrowserRouter>
  // <StrictMode>
  //   <About/>
  // </StrictMode>
)
