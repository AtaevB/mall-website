import './navigation.css';
import logo from '../../images/logo.png';
import smalllogo from '../../images/smalllogo.png';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }
    
    

     return (
        <>
      

        <nav className={isOpen ? 'open' : ''}>

                <div className="container">

                    <NavLink to="/"><img src={logo} alt='Logo' className='logo'/></NavLink>
                    <NavLink to="/"><img src={smalllogo} alt='Logo' className="smalllogo"/></NavLink>

                    <ul className="">
                        <NavLink to="/" className="navlink" onClick={closeMenu}>О нас</NavLink>
                        <NavLink to="/services" className="navlink" onClick={closeMenu}>Услуги</NavLink>
                        <NavLink to="/shops" className="navlink" onClick={closeMenu}>Магазины</NavLink>
                        <NavLink to="/restaurants" className="navlink" onClick={closeMenu}>Рестораны</NavLink>
                        <NavLink to="/mallmap" className="navlink" onClick={closeMenu}>Карта</NavLink>
                    </ul>

                    <div className={`burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                    </div>

                </div>

        </nav>

        </>
    );
}
 
export default Navigation;