import { useState } from 'react'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import History from './pages/History'
import Dashboard from './pages/Dashboard'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    
    <>

    <Header/>

    <Routes>

      {/* setting routes for each component */}

      <Route path='/' Component={Landing} />

      <Route path='/dash' Component={Dashboard}/>

      <Route path='/his' Component={History}/>

    </Routes>

    <Footer/>

    </>
  )
}

export default App
