import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Profile from '../../../assets/img/profile/profile.jpg'
import "./about.css"

function About() {
    return ( 
        <div id = "about">
            <div className = "about">
            <h1 className="pt-3 text-center font-details pb-3"> ABOUT ME! </h1>
           
            <Container>

                <Row className="pt-3 pb-5 align-items-center"> 
                    {/* Profile Pic */}
                    <Col xs={12} md = {6}>
                        <Row className = "justify-content-center mb-2 mr-2 ">
                             <Image className="profile justify-content-end" src={Profile} thumbnail />
                        </Row>
                    </Col>
  
                    {/* -- Buttons -- */}
                    <Col>
                        <Row className=" align-items-start p-2 my-details rounded"> 
                          <div className = "desc">
                                <h3><strong>Hello folk! I'm Vibhav</strong></h3>
                    
                                <br /> A curious programmer with an endless appetite for learning, I'm a Sport Programmer and a Web Developer from New Delhi, India.
                                Currently I am exploring stuff as an undergraduate in Computer Science Engineering at Jaypee Institute of Information Technology Noida.
                                <br /> <br />
                                I am always passionate about helping people through my problem solving skills and thus, I believe in growing as a team.
                                <br /> <br />
                                Along with Sport Programming, Watching Anime, Chess, Speed-Cubing, Table-Tennis and Music are my other hobbies.
                                <br /> <br /> Being always involved in something, I am always curious to learn about new technology and leverage it to solve real world problems.
                                <br />Feel free to contact me through twitter, email, linkedIn. I would be glad if I can help you in any possible way.
                                <br />
                
                                <Col className="d-flex justify-content-center flex-wrap">
                                
                                    <div>
                                        <a href="https://drive.google.com/file/d/1W7FzvQfv4h2zBe5nUrXYJ7Q7bXt63O7e/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-primary"  size = "lg">
                                            My Resume
                                        </Button>
                                        </a>
                                    </div>
                                    
                                    <div>
                                        <a href="https://github.com/reapedjuggler" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2 fab fa-github-square" variant="outline-dark" size = "lg">
                                            &nbsp; GitHub  
                                        </Button>
                                        </a>
                                    </div>
                                    
                                    <div>
                                        <a href="https://www.linkedin.com/in/vibhav-tomar-883282178/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info" size = "lg">
                                            LinkedIn
                                        </Button>
                                        </a>
                                    </div>
        
                                    <div>
                                        <a href = "https://twitter.com/reapedjuggler" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2 fab fa-twitter" variant = "outline-primary" size = "lg">
                                            &nbsp; Twitter
                                        </Button>
                                        </a>
                                    </div>

                                </Col>

                            </div>
                        </Row>

                    </Col>
                </Row>
            </Container>
            
            </div>
        </div>
    )
}

export default About;
