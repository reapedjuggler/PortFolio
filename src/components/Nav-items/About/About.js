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
            <h1 className="pt-3 pb-5 align-items-center"> ABOUT ME! </h1>
           
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
                          
                            <strong>Hello folk! I'm Vibhav</strong>
                            <br /> A Curios programmer with an endless appetite for learning, I'm a Sport Programmer and a Web Developer from New Delhi, India.
                             Currently iam exploring stuff as an undergraduate in Computer Science Engineering, at Jaypee Institute of Information Technology Noida.
                            <br /> <br />
                             I am always passionate about helping people through my problem skills and thus, i always believe in growing as a team.
                            <br /> <br />
                            Along with Sport Programming, Anime,Chess, Speed-Cubing, Table-Tennis and Music are some of my hobbies.
                            <br /> <br /> Being always involved in something, iam always curios to learn about new technology and leverage it to solve real world problems.
                            <br />Feel free to contact me through twitter, email, linkedIn. I would be glad if i can help you in any possible way.
                            <br />
            
                            <Col className="d-flex justify-content-center flex-wrap">
                                
                                <div>
                                    <a href="#contact">
                                    <Button className="m-2" variant="outline-success" size = "lg">
                                        Let's get in touch
                                    </Button>
                                    </a>
                                </div>

                                <div>
                                    <a href="https://drive.google.com/file/d/1W7FzvQfv4h2zBe5nUrXYJ7Q7bXt63O7e/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-success"  size = "lg">
                                        My Resume
                                    </Button>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://github.com/reapedjuggler" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-success" size = "lg">
                                        GitHub  
                                    </Button>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://www.linkedin.com/in/vibhav-tomar-883282178/" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-success" size = "lg">
                                        LinkedIn
                                    </Button>
                                    </a>
                                </div>
    
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
            
            </div>
        </div>
    )
}

export default About;
