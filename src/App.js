import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax'
import Container from 'react-bootstrap/Container';

import MyNavbar from './components/my-navbar/Navbar'
import Carousel from './components/carousal/Carousal'
import Title from './components/title/Title'
import About from './components/Nav-items/About/About'
import Tech from './components/Nav-items/tech/Tech'
import Project from './components/Nav-items/projects-timeline/projects'

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
       
       <div>
        <Container>
          <Fade>
            <Tech />
          </Fade>
        </Container>
       </div>

             
       <div>
        <Container>
          <Fade>
            <Project />
          </Fade>
        </Container>
       </div>

    </div>

  );
}

export default App;