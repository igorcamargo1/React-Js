import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'

function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact/*muito importante*/ path='/' element={<Home/>}></Route>
        <Route path='/empresa' element={<Empresa/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
