import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Container from '../container/Container'
import logo from '../../../img/costs_logo.png'

export default function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="Costs" />
                </Link>
                <ul class={styles.list}>
                    <li className={styles.item}><Link to='/'>Home</Link></li>
                    <li className={styles.item}><Link to='/newProject'>New Project</Link></li>
                    <li className={styles.item}><Link to='/projects'>Projects</Link></li>
                    <li className={styles.item}><Link to='/company'>Company</Link></li>
                    <li className={styles.item}><Link to='/contact'>Contact</Link></li>
                </ul>
            </Container>
        </nav>
    )
}