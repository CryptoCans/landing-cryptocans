import { Fragment } from 'react';
import {NftContainer, Title, Content, Text, Bar, Cards, Card, CardMain, CardBody, Price, Mint, CardContainer, ContainerCard, MainContainer, BarCommon, BarRare, BarEpic, BarLegendary, CardHead, ButtonCommon, ButtonRare, ButtonEpic, ButtonLegendary} from './StyledNfts';
import nftIco from '../../img/nft-ico.svg';
import commun from '../../img/common-nft.png'
import rare from '../../img/rare-nft1.png'
import epic from '../../img/epic-nft.png'
import legendary from '../../img/legendary-nft1.png'
import bnb from '../../img/bnb-ico.svg'
import { motion } from 'framer-motion';

const Nft = () => {
    return ( 
        <Fragment>
            <NftContainer>
                <CardContainer>
                    <Text>
                        <Title>         
                            <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.5}}
                            >TOKENS NFT’S</motion.h2>
                        </Title>
                        {/* <Content>CryptoCans.io is an NFT game built on Binance Smart Chain. You will have to train your cyborg in order to compete against other cyborg owners around the world. Racing happens 24/7.</Content> */}
                    </Text>
                    {/* <Bar></Bar> */}
                </CardContainer>
                <Cards>
                    <ContainerCard>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5}}
                        >
                            <Card className='col-1'>
                                <CardHead>
                                    <img src={commun} />
                                    <h2>COMMON</h2>
                                    <BarCommon></BarCommon>
                                </CardHead>
                                <CardBody>
                                    <Mint>
                                        <p>Minted 0/100</p>
                                        <ButtonCommon href='/shop'>Mint</ButtonCommon>
                                    </Mint>
                                    <Price>
                                        <p>0.001</p>
                                        <div>
                                            <img src={bnb}/>
                                            <p>BNB</p>
                                        </div>
                                    </Price>
                                </CardBody>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Card className='col-2'>
                                <CardHead>
                                    <img src={rare} />
                                    <h2>RARE</h2>
                                    <BarRare></BarRare>
                                </CardHead>
                                <CardBody>
                                    <Mint>
                                        <p>Minted 0/100</p>
                                        <ButtonRare href='/shop'>Mint</ButtonRare>
                                    </Mint>
                                    <Price>
                                        <p>0.002</p>
                                        <div>
                                            <img src={bnb}/>
                                            <p>BNB</p>
                                        </div>
                                    </Price>
                                </CardBody>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Card className='col-3'>
                                <CardHead>
                                    <img src={epic} />
                                    <h2>EPIC</h2>
                                    <BarEpic></BarEpic>
                                </CardHead>
                                <CardBody>
                                    <Mint>
                                        <p>Minted 0/100</p>
                                        <ButtonEpic href='/shop'>Mint</ButtonEpic>
                                    </Mint>
                                    <Price>
                                        <p>0.003</p>
                                        <div>
                                            <img src={bnb}/>
                                            <p>BNB</p>
                                        </div>
                                    </Price>
                                </CardBody>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }} 
                        >
                            <Card className='col-4 card-legendary'>
                                <CardHead>
                                    <img src={legendary} />
                                    <h2>legendary</h2>
                                    <BarLegendary></BarLegendary>
                                </CardHead>
                                <CardBody>
                                    <Mint>
                                        <p>Minted 0/100</p>
                                        <ButtonLegendary href='/shop'>Mint</ButtonLegendary>
                                    </Mint>
                                    <Price>
                                        <p>0.004</p>
                                        <div>
                                            <img src={bnb}/>
                                            <p>BNB</p>
                                        </div>
                                    </Price>
                                </CardBody>
                            </Card>
                        </motion.div>
                    </ContainerCard>
                        <MainContainer>
                            <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <CardMain className='col-4'>
                                    <CardHead>
                                        <img src={legendary} />
                                        <h2 className='h2-legendary'>LEGENDARY</h2>
                                        <BarLegendary></BarLegendary>
                                    </CardHead>
                                    <CardBody>
                                        <Mint>
                                            <p>Minted 0/100</p>
                                            <ButtonLegendary href='/shop'>Mint</ButtonLegendary>
                                        </Mint>
                                        <Price>
                                            <p>0.004</p>
                                            <div>
                                                <img src={bnb}/>
                                                <p>BNB</p>
                                            </div>
                                        </Price>
                                    </CardBody>
                                </CardMain>
                            </motion.div>
                        </MainContainer>
                    
                </Cards>
            </NftContainer>
        </Fragment>
     );
}
 
export default Nft;