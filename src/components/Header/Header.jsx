import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.svg'
// import { NavLink } from "react-router-dom";



function Header () {
    return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='navbar__logo' />
      <div className='navbar__link'>
        <Link to="/" className='navbar__link__accueil'>Accueil</Link>
        <Link to="../pages/Apropos" className='navbar__link__apropos'>A Propos</Link>
      </div>
    </nav>
  )
}

export default Header