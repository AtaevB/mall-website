import './navigation.css';
import logo from '../../images/logo.png';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (  
        <>
        
        <nav>

                <div className="container">

                    <NavLink to="/"><img src={logo} alt='Logo'/></NavLink>

                    

                    <ul className="">
                        <NavLink to="/" className="navlink">О нас</NavLink>
                        <NavLink to="/services" className="navlink">Услуги</NavLink>
                        <NavLink to="/shops" className="navlink">Магазины</NavLink>
                        <NavLink to="/restaurants" className="navlink">Рестораны</NavLink>
                        <NavLink to="/mallmap" className="navlink">Карта</NavLink>
                    </ul>

                </div>

        </nav>

        </>
    );
}
 
export default Navigation;