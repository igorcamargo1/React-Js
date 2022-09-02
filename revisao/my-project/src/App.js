import React from 'react';
import Cabecalho from './components/cabecalho/Cabecalho';
import Carros from './components/carros/Carros';
import Parceiros from './components/parceiros/Parceiros';



function App() {
  
  const carros = ['Camaro','Ferrari', 'Audi TT','Mercedes AMD','Porsche']

  function mult(){
    return 10*5
  }
  
  return (
    <>
      <Cabecalho/>
      <Carros carros = {carros} />
      <Parceiros mult = {mult}/>
    </>
  );
}

export default App;
