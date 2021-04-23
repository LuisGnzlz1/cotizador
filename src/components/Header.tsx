import logoRimac from '../assets/logo-rimac.png';
import { FaPhoneAlt } from 'react-icons/fa';

export function Header() {

  return (
    <>
        <nav className="navbar fixed-top navbar-light py-4 header">
            <div className="container-fluid">

                <div className="col-6 header__side-left">
                    <img src={logoRimac} className="header__logo" alt="logo-rimac"/>
                </div>

                <div className="navbar-nav ml-auto header__side-right">

                    <span className="header__texto-telefono-mobile"><a className="header__link-telefono" href={'tel:+014116001'}><FaPhoneAlt /> Llámanos</a></span>

                    <span className="header__texto-telefono-desktop">¿Tienes alguna duda?&nbsp;&nbsp;<a className="header__link-telefono" href={'tel:+014116001'}><FaPhoneAlt /> (01) 411 6001</a></span>

                </div>

            </div>
        </nav>

    </>

  );
}

export default Header;