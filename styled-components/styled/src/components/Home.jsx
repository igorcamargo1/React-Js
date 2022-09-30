import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/lt">Lista de tarefas</Link>
                    <Link to="/">Adicionar tarefas</Link>
                </nav>
            </header>
        </div>
    )
}
