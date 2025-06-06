import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ticket from './components/Ticket/Ticket.jsx'

import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<App/>}></Route>
      <Route path="/ticket" element={<Ticket/>}></Route>
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
