function Form(){
    
    function cadastrarUsuario(e/*e = event*/){
        e.preventDefault()/*ele faz com que o evento de enviar o form para o back pare e faça o que está pedindo abaixo*/ 
        console.log("Usuário cadastrado")
    }
    
    return(
        
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="digite seu nome..."/>
                </div>
                <div>
                <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form