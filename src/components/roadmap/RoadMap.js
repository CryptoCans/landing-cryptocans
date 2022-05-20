import { BarLegendary } from '../nfts/StyledNfts';
import { Container, Timer, Bar, List, ContainerRoad, Ball } from './styleRoadMap';

const RoadMap = () => {
    return ( 
        <Container>
            <h2>ROADMAP</h2>
            <ContainerRoad>
                <div>
                    {/* <Timer>
                        <p>2022</p>
                        <h4>1st Quarter</h4>
                    </Timer> */}
                    <Timer>
                        <p>2022</p>
                        <h4>2st Quarter</h4>
                    </Timer>
                    <Timer>
                        <p>2022</p>
                        <h4>3st Quarter</h4>
                    </Timer>
                    <Timer>
                        <p>2022</p>
                        <h4>4st Quarter</h4>
                    </Timer>
                </div>
                <div>
                    <Ball className='ball-1'/>
                    <Ball className='ball-2'/>
                    <Ball className='ball-3'/>
                    <Ball className='ball-4'/>
                    <Bar />
                </div>
                <div>
                    <List>
                        <div>
                            <p> - landing page design</p>
                            <p> - Promotion on networks and Youtube</p>
                            <p> - Token and nft presale</p>
                            <p> - Launch of the races</p>
                            <p> - Against the machine (Single Race)</p>
                        </div> 
                    </List>
                    <List>
                        <div>
                            <p> - Launching the mode of food to your dogs</p>
                            <p> - Rank racing mode released</p>
                            <p> - Launch of the betting module</p>
                            <p> - Expansion of the work team</p>
                        </div> 
                    </List>
                    <List>
                        <div>
                            <p> - Mini game of visiting the dog tracks to feed the dogs of other players</p>
                            <p> - Scholarships</p>
                            <p> - 3d mobile game of competitions in real time against other players</p>
                        </div> 
                    </List>
                </div>
            </ContainerRoad>
            
        </Container>
     );
}
 
export default RoadMap;