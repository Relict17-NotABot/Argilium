import { Outlet } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer';


export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <NavBar />
      <main className=" w-full p-4">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

