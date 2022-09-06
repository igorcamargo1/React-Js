import './index.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/container/Container';



function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/company'>Company</Link>
        <Link to='/newProject'>New Project</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/newProject' element={<NewProject />}></Route>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  )
}

export default App;
