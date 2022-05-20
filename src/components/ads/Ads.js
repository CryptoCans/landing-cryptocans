import { Container, ContainerPass, Contract, ContainerAddres } from './styleAds';
import { motion } from "framer-motion";
import { AiOutlineCopy } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import pass from '../../img/pass.png';

const Ads = () => {
    return ( 
        <Container>
            <motion.div 
                initial={{ x: -100, opacity: 0 }} 
                whileInView={{ opacity: 1, x: 0  }}
                transition={{ duration: 0.5 }}>
                <ContainerPass>
                        <span className='get-pass'>Get your race pass!</span>
                        <img src={pass} />     
                </ContainerPass>
            </motion.div> 
            <motion.div 
                initial={{ x: 100, opacity: 0 }} 
                whileInView={{ opacity: 1, x: 0  }}
                transition={{ duration: 0.5}}>  
                <Contract>
                    <h3>$CCT Contract Address</h3>
                    <ContainerAddres>
                        <span>BEP20</span>
                        <div>
                            <span>0x2a9dadC679BA66540af0f506003B2Ba53DEc49f7</span> 
                            <AiOutlineCopy className='copy' style={{fontSize: '18px'}} />
                        </div>
                    </ContainerAddres>
                </Contract>
            </motion.div> 
        </Container>
     );
}
 
export default Ads;