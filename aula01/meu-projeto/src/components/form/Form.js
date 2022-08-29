import { useState } from 'react'

function Form(){
    
    function cadastrarUsuario(e/*e = event*/){
        e.preventDefault()/*ele faz com que o evento de enviar o form para o back pare e faça o que está pedindo abaixo*/ 
        console.log(`Usuário ${name} foi cadastrado com a senha: ${pwd}`)}

        const[name, setName] = useState()
        const[pwd, setPwd] = useState()
    
    
    return(
        
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name=
                    'name' placeholder="digite seu nome..."
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="pwd">Senha:</label>
                    <input type="password" id='pwd' name='pwd' placeholder="digite sua senha..." onChange={(e) => setPwd(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form