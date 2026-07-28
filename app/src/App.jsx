import './App.css'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'

export default function App() {
  return (
    <div>
      <NavBar/>
      <main>
        <HomePage />
        <ServicesPage />
      </main>
    </div>
  )
}

