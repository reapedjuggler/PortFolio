import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { tech } from "./data.js";

import './tech.css'

// // console.log(tech, "\n\n\n\nobito\n\n\n\n");
// console.log(tech.frontend, "\n\n\n\nobito\n\n\n\n");
// console.log(tech.backend, "\n\n\n\nobito\n\n\n\n");
// console.log(tech.backend[0].name, "\n\n\n\nobito\n\n\n\n");


const Tech = () => {

    return (
        
        <div  className="pt-3 pb-3" id = 'skills'>
            <h1 className = "text-center font-details-b pb-4"> 
                <span className = "custom">
                    SKILLS
                </span> 
                <hr></hr>
            </h1>
            <CardDeck>
                <Row className="d-flex justify-content-around">
                  
                    {/* Front - End */}

                    <Col md = {6}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className = "text-center  card-title">Front-End</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {
                                        tech.frontend.map((data, index) => (
                                            // {console.log(data, " \n\niam data")}
                                            <div className="p-2" key={index}>
                                                <a  className="text-dark text-decoration-none"  href = {data.link} target="_blank" rel="noopener noreferrer">
                                                <Image src = {data.imgSrc} alt = {data.alt} rounded className="image-style m-1"></Image> 
                                                    {data.name}
                                                </a>
                                            </div>
                                        ))
                                    }
                                </Card.Text>    
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Back - End */}

                    <Col md = {6}>
                        <Card className = "focus mt-2 mb-2"> 
                            <Card.Body>
                                <Card.Title className = "text-center  card-title">Back-End & Databases</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {
                                        tech.backend.map((data, index) => (
                                            <div className="p-2" key={index}>
                                                <a  className="text-dark text-decoration-none"  href = {data.link} target="_blank" rel="noopener noreferrer">
                                                <Image src = {data.imgSrc} alt = {data.alt} rounded className="image-style m-1"></Image> 
                                                    {data.name}
                                                </a>
                                                <p> <br /> </p>
                                        </div>  
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    {/* Programming-Languages */}

                        <Card className = "focus mt-2 mb-2"> 
                            <Card.Body>
                                <Card.Title className = "text-center  card-title">Programming Languages</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {
                                        tech.programmingLanguages.map((data, index) => (
                                            <div className="p-2" key={index}>
                                                <a  className="text-dark text-decoration-none"  href = {data.link} target="_blank" rel="noopener noreferrer">
                                                <Image src = {data.imgSrc} alt = {data.alt} rounded className="image-style m-1"></Image> 
                                                    {data.name}
                                                </a>
                                        </div>  
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>


                    {/* Other Technologies */}
                    <Card className = "focus mt-2 mb-2"> 
                            <Card.Body>
                                <Card.Title className = "text-center  card-title">Other Technologies</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {
                                        tech.other.map((data, index) => (
                                            <div className="p-2" key={index}>
                                                <a  className="text-dark text-decoration-none"  href = {data.link} target="_blank" rel="noopener noreferrer">
                                                <Image src = {data.imgSrc} alt = {data.alt} rounded className="image-style m-1"></Image> 
                                                    {data.name}
                                                </a>
                                        </div>  
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                    </Card>                
                </Row>
            </CardDeck>
        </div>
    )
}

export default Tech;
