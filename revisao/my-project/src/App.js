import React from 'react';
import Lista from './components/listaAlunos/ListaAlunos'


function App() {
  
  const alunos = ['Pedro', 'Antonio', 'João']
  const alunoNovo = () => 'Fernanda'
  
  return (
    <>
      <Lista alunos = {alunos} alunoNovo = {alunoNovo}/>
    </>
  );
}

export default App;
