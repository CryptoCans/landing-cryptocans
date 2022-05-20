import {Container, Bar, Site, Social, Logo} from './footerStyled';
import discord from '../../img/discord.svg';
import telegram from '../../img/telegram.svg';
import twitter from '../../img/twitter.svg';
import youtube from '../../img/youtube.svg';
import logo from '../../img/crypto-only.png';

const Footer = () => {
    return ( 
        <Container>
            <Bar />
            <div>
                <Site>
                    <h3>SITE MAP:</h3>
                    <ul>
                        <li>Home</li>
                        <li>Whitepaper</li>
                        <li>FAQ</li>
                    </ul>
                </Site>
                <Logo>
                    <img src={logo} />
                    <p>&copy;All Rights Reserved - cryptocans.io 2022</p>
                </Logo>
                <Social>
                    <h3>¡Follow our social networks!</h3>
                    <ul>
                        <li><img src={discord}/></li>
                        <li><img src={telegram}/></li>
                        <li><img src={twitter}/></li>
                        <li><img src={youtube}/></li>
                    </ul>
                </Social>
            </div>
        </Container>
    );
}
 
export default Footer;