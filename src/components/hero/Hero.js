import './hero.css';
import { motion } from "framer-motion";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineChangeCircle } from "react-icons/md";
import { Container, Details, Picture, ContainerAds, Main, ContainerBtn, Networck  } from './styleHero';
import Ads from '../ads/Ads';
import canodrome from '../../img/header-canodrome.png';
import can from '../../img/header3.png';
import humo from '../../img/humo.png';

const Hero = () => {
    return ( 
        <Container>
            <ContainerAds>
                <Ads />
            </ContainerAds>
            <Main>
                <Details>
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}>
                        <h1 className='glitch' data-text="THE NFTS">THE NFTS <br /> FASTER <br /> OF THE WORlD</h1>  
                        <p>Live a Cybord dog racing experience in completely decentralized virtual world.</p>
                    </motion.div>
                    <ContainerBtn>
                        <motion.button
                            className='whitepaper' 
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.5, 
                            delay: 0.7 }} 
                        ><IoNewspaperOutline style={{ 
                            fontSize: '22px',
                            paddingRight: "5px",
                        }} />WHITEPAPER</motion.button>
                        <motion.button className='trade' 
                            initial={{ x: 50, opacity: 0 }} 
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}>
                            <MdOutlineChangeCircle style={{ 
                                fontSize: '25px'
                            }} />TRADE</motion.button>
                    </ContainerBtn>
                </Details>
                
                <Picture>
                    <motion.img 
                    initial={{ x: 50, opacity: 0 }} 
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    src={can}>
                    </motion.img>
                    {/* <div>
                        <img className='humo' src={humo}/>
                    </div> */}
                    {/* <img src={can}/> */}
                    {/* <Networck>

                    </Networck> */}
                </Picture>
            </Main>
        </Container> 
    );
}
 
export default Hero;