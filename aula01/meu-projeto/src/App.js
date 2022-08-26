import './App.css';
import HelloWorld from './components/helloWord/HelloWorld';

function App() {
  
  const name = 'Igor'
  
  const newName = name.toUpperCase()
  
  function sum(a, b){
    return a + b
  }

  const url= "https://via.placeholder.com/150"

  return (
    <div/* aqui é usado o className, e não somente o class */ className="App">
      <h1>Olá React, meu nome é {newName}</h1>
      < HelloWorld/>
      <p>Meu primeiro App</p>
      <p>soma: {sum(1,2)}</p>
      <img src={url} alt ="minha imagem"/>
    </div>
  )
}

export default App;
