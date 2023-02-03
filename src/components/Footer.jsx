// asset
import logo from '../assets/logoWhite.svg';

function Footer () {
    return (
      <div className='footer'>
          <img src={logo} alt="logo" className="footer__logo"/>
          <div className='footer__text'>© 2020 Kasa. All rights reserved</div>
      </div>
  )
}

export default Footer