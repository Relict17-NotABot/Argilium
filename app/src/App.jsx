import './App.css'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar/>
      <main className="max-w-7xl mx-auto p-4">
        <HomePage />
        <ServicesPage />
      </main>
    </div>
  )
}

