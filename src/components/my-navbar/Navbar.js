import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/icons/logo.jpg';
import './navbarCss.css';

const MyNavbar = () => {
    return (
      <React.Fragment>

            <Navbar fixed = "top" collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img className="logo" src = {Logo} alt = "My Logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">

                <Nav.Link href="#home">Home</Nav.Link>    
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills"> Skills </Nav.Link>
                <Nav.Link href="#contact"> Contact </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

      </React.Fragment>
    )
}

export default MyNavbar

