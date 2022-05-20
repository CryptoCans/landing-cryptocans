import { Container, Card, ContainerCard, Text } from './styleTeams';
import front from '../../img/front.svg';
import ceo from '../../img/ceo.svg';
import back from '../../img/back.svg';
import design from '../../img/design.svg';

const Teams = () => {
    return ( 
        <Container>
            <div className='item-1'>
                <Card>
                    <img src={ceo}/>
                    <Text>
                        <h3>Mauricio Mendoza</h3>
                        <p>Co-Founder</p>
                    </Text>  
                </Card>
            </div>
            <div className='item-2'>
                <h2>TEAMS</h2>
                <ContainerCard>
                    <Card>
                        <img src={front}/>
                        <Text>
                            <h3>Manuel Perez</h3>
                            <p>Blockchain Developer</p>
                        </Text>  
                    </Card>
                    <Card>
                        <img src={back}/>
                        <Text>
                            <h3>Jason Hernández</h3>
                            <p>Front-End Developer</p>
                        </Text>  
                    </Card>
                </ContainerCard>
            </div>
            <div className='item-3'>
                <Card>
                    <img src={design}/>
                    <Text>
                        <h3>Enny Hidalgo</h3>
                        <p>Designed</p>
                    </Text>  
                </Card>
            </div>
        </Container>
     );
}
 
export default Teams;