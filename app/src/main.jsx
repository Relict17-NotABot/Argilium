import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { EmployeesPage } from './pages/EmployeesPage'
import { CitasPage } from './pages/CitasPage'
import { SchedulesPage } from './pages/SchedulesPage'
import { NotFoundPage } from './pages/NotFoundPage'

createRoot(document.getElementById('root')).render(
    <StrictMode >
      <BrowserRouter>
        <Routes>
          <Route element={<App/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/employees" element={<EmployeesPage/>}/>
            <Route path="/appointments" element={<CitasPage/>}/>
            <Route path="/schedules" element={<SchedulesPage/>}/>
            <Route path="*" element={<NotFoundPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  ,
)
