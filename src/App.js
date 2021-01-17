import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax'
import Container from 'react-bootstrap/Container';

import MyNavbar from './components/my-navbar/Navbar'
import Carousel from './components/carousal/Carousal'
import Title from './components/title/Title'
import About from './components/Nav-items/About/About'

import './App.css';
import backgroundImage from './assets/img/parallex/background.jpg'

const App = () => {
  return (
    <div className="App" style = {{position: "relative"}}>
       <MyNavbar />
       <Title />
       <Carousel />
       <div>
         <Parallax blur={{ min: -30, max: 30 }}
          bgImage={backgroundImage}
          bgImageAlt=""
          strength={-200}>

            <div>
              <Container className="container-box rounded">
                <Fade duration = {500}>
                      <About />
                </Fade>
              </Container>
            </div>
          </Parallax>
       </div>
    </div>

  );
}

export default App;