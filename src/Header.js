import logo from './logo.png';
import './styles.css';

function Header(){
    return(
        <div class = 'Frame'>
            <div class = 'Header'>
                <div class = 'BlankCol'/>
                <div class = 'LogoCol'>
                    <div class = 'Circle'>
                        <img src={logo} class="AppLogo" alt="logo"/>
                    </div>
                </div>
                <div class = 'LoginCol'>
                    <div class = 'ButtonP'>
                        Login/SignUp
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;