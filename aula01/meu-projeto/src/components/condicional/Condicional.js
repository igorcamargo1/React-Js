import {useState} from 'react'

export default function Condicional(){

    const[email, setEmail] = useState()
    
    const[userEmail, setUserEmail] = useState()
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input type="email" placeholder='digite seu email' onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' onClick={enviarEmail}>Enviar email</button>
                {userEmail &&( //"(condicional)se o 'userEmail' preenchido(&&), faça:'"
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}