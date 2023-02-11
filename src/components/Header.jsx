// // react
// import { Link } from 'react-router-dom'

// // asset
// import logo from '../assets/LOGO.svg'

// function Header () {
//     return (
//     <nav className='navbar'>
//       <img src={logo} alt='logo' className='navbar__logo' />
//       <div className='navbar__link'>
//         <Link to="/" className='navbar__link__accueil'>Accueil</Link>
//         <Link to="../pages/Apropos" className='navbar__link__apropos'>A Propos</Link>
//       </div>
//     </nav>
//   )
// }

// export default Header

// import { NavLink } from "react-router-dom";

// //Style
// import Logo from "../design/logo.svg";

// const StyledNavbar = () => {
//   return (
//     <nav className="navbar">
//       <NavLink to="/">
//         <img src={Logo} alt="Logo" className="navbar__img" />
//       </NavLink>
//       <div className="navbar__links">
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? "navbar__links--active" : "navbar__links--inactive"
//           }
//         >
//           Accueil
//         </NavLink>
//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             isActive ? "navbar__links--active" : "navbar__links--inactive"
//           }
//         >
//           About
//         </NavLink>
//       </div>
//     </nav>
//   );
// };
// export default StyledNavbar;

import { NavLink } from "react-router-dom";

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
            {/* <Link to="/" className='navbar__link__accueil'>Accueil</Link>
            <Link to="../pages/Apropos" className='navbar__link__apropos'>A Propos</Link> */}
          </div>
        </nav>
    )
  }
  
  export default Header