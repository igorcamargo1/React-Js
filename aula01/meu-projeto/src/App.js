import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'

function App() {
  

  return (
    <Router>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
      <ul>
        <li><Link to='/empresa'>Home</Link></li>
      </ul>
      <ul>
        <li><Link to='/contato'>Home</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/empresa">
          <Empresa/>
        </Route>
        <Route path="/contato">
          <Contato/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
