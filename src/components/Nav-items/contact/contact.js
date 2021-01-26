import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

import "./contact.css"

const contact = () => {
    return (
        <div id = "contact">
           <h1 className = "pt-3 text-center font-details-b pb-3 custom">Contact Me</h1> 
        
           <Jumbotron className = "contact-jumbotron">
             <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                    <div className = "m-2">
                        <a href = "mailto:tomarvibhav55@gmail.com" rel = "noopener noreferrer">
                            <Button variant="outline-danger m-3 cst" title="akjha96@gmail.com">
                                <i className = "fas fa-envelope-square"> Email </i>
                            </Button>
                        </a>
                    </div>

                    <div className = "m-2">
                        <a href = "https://www.linkedin.com/in/vibhav-tomar-883282178/" rel = "noopener noreferrer">
                            <Button variant="outline-info m-3 cst" title="akjha96@gmail.com"> 
                                <i className="fab fa-linkedin"> LinkedIn </i>
                            </Button>
                        </a>
                    </div>

                    <div className = "m-2">
                        <a href = "https://twitter.com/reapedjuggler" rel = "noopener noreferrer">
                            <Button variant="outline-primary m-3 cst" title="akjha96@gmail.com">
                                <i className="fab fa-twitter"> Twitter </i>
                            </Button>
                        </a>
                    </div>

                    <div className = "m-2">
                        <a href = "https://github.com/reapedjuggler" rel = "noopener noreferrer">
                            <Button variant="outline-dark m-3 cst" title="akjha96@gmail.com">
                                <i className="fab fa-github-square"> Github </i>
                            </Button>
                        </a>
                    </div>

                </Col>
             </Row>
           </Jumbotron>

        </div>
    )
}

export default contact
