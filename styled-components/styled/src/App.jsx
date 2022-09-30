import React from 'react'
import Home from './components/Home'
import ListaTarefas from './components/ListaTarefas'
import MainRoutes from './routes/MainRoutes'

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <Home></Home>
      <MainRoutes/>
    </div>
  )
}
