import './footer.css';
import logo from '../../images/logo.png';
import telegram from '../../images/icons/telegram.png';
import email from '../../images/icons/email.png';
import vkontakte from '../../images/icons/vkontakte.png';

const Footer = () => {
    return ( <>
    
        <footer>
            <div className="footer-container">

                <div className='footer-logo'><a href=""><img src={logo} alt='Logo'/></a></div>

                <div className='icon-wrapper'>

                    <ul>

                        <li>
                        <a href=''><img src={telegram} alt='icon' className='footer-icon' /></a>
                        </li>

                        <li>
                        <a href=''><img src={email} alt='icon' className='footer-icon' /></a>
                        </li>

                        <li>
                        <a href=''><img src={vkontakte} alt='icon' className='footer-icon' /></a>
                        </li>

                    </ul>

                </div>
        
                <div className='contact-wrapper'>

                    <ul>
                        <li><p>+7 (977) 388 84-50</p></li>
                        <li><p>Москва, улица Московская, д.1</p></li>
                    </ul>

                </div>

            </div>
        </footer>

    </> );
}
 
export default Footer;