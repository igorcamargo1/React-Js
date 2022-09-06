import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer(){
    return <footer>
                <p>Rodapé</p>
                <ul className={styles.social_list}>
                    <li><FaFacebook/></li>
                    <li><FaInstagram/></li>
                    <li><FaLinkedin/></li>
                </ul>
                <p>Rodapé</p>
            </footer>
}