import { CartWidget } from '../CartWidget/CartWidget'
import './NavBarStyle.css'

export const NavBar = () => {
  return (
    <header>
        <h1>PerroFuBebidas</h1>
        <nav>
            <ul>
                <li>Vodka</li>
                <li>Gin</li>
                <li>Aperitivos</li>
                <li>Espumantes</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}
