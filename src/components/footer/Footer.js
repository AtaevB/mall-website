import './footer.css';
import logo from '../../images/logo.png';

const Footer = () => {
    return ( <>
    
        <footer>
            <div className="footer-container">

                <div className='footer-logo'><a href=""><img src={logo} alt='Logo'/></a></div>

                <div className='footer-wrapper'>

                    <ul>

                        <li>1</li>
                        <li>2</li>
                        <li>3</li>

                    </ul>

                </div>
            </div>
        </footer>

    </> );
}
 
export default Footer;