import './navigation.css';
import logo from '../../images/logo.png';

const Navigation = () => {
    return (  
        <>
        
        <nav>

                <div className="container">

                    <a href=""><img src={logo} alt='Logo'/></a>

                    <ul className="">
                        <li><a href=''>О нас</a></li>
                        <li><a href=''>Услуги</a></li>
                        <li><a href=''>Магазины</a></li>
                        <li><a href=''>Рестораны</a></li>
                        <li><a href=''>Карта</a></li>
                    </ul>

                </div>

        </nav>

        </>
    );
}
 
export default Navigation;