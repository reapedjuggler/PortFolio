these are changes

these are some more changes in vim :) 

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
import Contact from './components/Nav-items/contact/contact'
import Footer from './components/Nav-items/footer/footer'

import './App.css';
import backgroundImage from './assets/img/parallex/background.jpg'
import Cat from './assets/img/background/catbg.png'




const App = () => {

   console.log("Hey iam vibhav");

    <div className="App" style = {{position: "relative"}}>
       
       <MyNavbar />
       <Title />
       <Carousel />
      
       <div>
         <Parallax blur={{ min: -30, max: 30 }}
          


	bgImage={backgroundImage}

jjbgImageAlt=""
          strength={-200}>

            <div>
              <Container className="container-box rounded">
                <Fade duration = {500}>
                  <hr />
                      <About />
                </Fade>
              </Container>
            </div>

          </Parallax>
       </div>
       
       <div>
        <Container>
          <Fade bgImage = {Cat}>
            <hr />
            <Tech />
          </Fade>
        </Container>
       </div>

       <div>
         <Parallax
          bgImage={Cat}
          bgImageAlt=""
          strength={-200}>

            <div>
              <Container className="container-box rounded">
                <Fade duration = {500}>
                  <hr />
                      <Project />
		</Fade>
              </Container>
            </div>

          </Parallax>
       </div>
       
                    
       <div>
        <Container>
          <Fade>
            <hr />
            <Contact />
          </Fade>
        </Container>
       </div>

      <hr />
      <Footer />

    </div>

  );
}
export default App

export default App;
