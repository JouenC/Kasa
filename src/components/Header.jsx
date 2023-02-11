// react
import { NavLink } from "react-router-dom";

// asset
import logo from '../assets/LOGO.svg'

function Header () {
      return (
        <nav className='navbar'>
          <img src={logo} alt='logo' className='navbar__logo' />
          <div className='navbar__link'>
          <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar__link__accueilactif" : "navbar__link__accueil"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="../pages/Apropos"
          className={({ isActive }) =>
            isActive ? "navbar__link__aproposactif" : "navbar__link__apropos"
          }
        >
          A Propos
        </NavLink>
          </div>
        </nav>
    )
  }
  
  export default Header