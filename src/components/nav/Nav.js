import { Container, Ul, Logo, Metamask, LogoText } from './styleNav';
import logo from '../../img/crypto-only.png';
import text from '../../img/crypto-text.png';
import metamask from '../../img/metamask.svg';

const Nav = () => {
    return ( 
        <Container>
            <Ul>
                <li className='logo'>
                    <Logo src={logo} />
                    <LogoText src={text} />
                </li>
                <li>MarketPlace</li>
                <li>Game</li>
                <li>RoadMap</li>
                <li>
                    <Metamask>
                        <img src={metamask} /><span>Conectar</span>
                    </Metamask>
                </li>
                
                
            </Ul>
        </Container>
     );
}
 
export default Nav;