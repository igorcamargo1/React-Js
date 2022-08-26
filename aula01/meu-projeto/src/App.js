import './App.css';
import HelloWorld from './components/helloWord/HelloWorld';
import SayMyName from './components/sayMyName/SayMyName';
import Pessoa from './components/pessoa/Pessoa';
import Frase from './components/frase/Frase';

function App() {
  
  const nome = "Silvana"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Igor"/>
      <SayMyName nome="Rapha"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="igor" idade="19" profissao="programador"
      foto="https://via.placeholder.com/150"/>
    </div>
  )
}

export default App;
