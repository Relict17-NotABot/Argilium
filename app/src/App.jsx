import { Outlet } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar/>
      <main className="max-w-7xl mx-auto p-4">
        <Outlet/>
      </main>
    </div>
  );
}

