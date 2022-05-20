import { Container, Picture, Card } from './styleAbout';
import { motion } from "framer-motion";
import canodrome from '../../img/canodrome.png';


const About = () => {
    return ( 
        <Container>
            <Picture>
                <motion.div
                    initial={{ opacity: 0, y: -150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.5
                    }}
                >
                    <img src={canodrome} />
                </motion.div>
            </Picture>
            <Card>
                <motion.div   
                    className='card'
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    duration: 1,
                    delay: 0.5
                    }}>

                        <h2>ABOUT THE PROJECT</h2>
                        <p>cryptocans.io an nft game where players compete on a track against other players or against the machine looking to get the first, second or third place in order to get the rewards in the internal token (silver) to later be able to increase your herd or exchange them directly for CCT tokens (cryptocans.io token) that you can convert into real money.</p>
                </motion.div>
            </Card>
        </Container>
     );
}
 
export default About;