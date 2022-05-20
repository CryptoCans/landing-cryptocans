import './App.css';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Nfts from './components/nfts/Nfts';
import Teams from './components/teams/Teams';
import RoadMap from './components/roadmap/RoadMap';
import Tokenomic from './components/tokenomic/Tokenomic';
import Footer from './components/footer/Footer';
import bg from './img/bg7.png';

const Header = styled.header`
  position: relative;
  .background{
    position: absolute;
    top: -150px;
    left: 0;
    width: 100%;
    z-index: -1;
    opacity: 0.2;
    transform: scaleX(-1);
    
  }
`;

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <img className='background' src={bg} />
        <motion.div 
          initial={{ y: -50, opacity: 0}} 
          whileInView={{ opacity: 1 }}
          animate = {{ y: 0 }} 
          transition={{ duration: 0.5 }}>
          <Nav />
        </motion.div>
        <Hero />
      </Header>
        <About />
        <Nfts />
        <Tokenomic />
        <RoadMap />
        <Teams />
        <Footer />
    </div>
  );
}

export default App;
