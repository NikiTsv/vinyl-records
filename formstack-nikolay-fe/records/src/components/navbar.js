import React from 'react';
import logo from '../record-logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';


const navbar = (props) => (
    <Navbar bg="light" expand="lg" className="navbar-fixed-top">
        <Container>
            <Navbar.Brand href="#home">Vinyl Records</Navbar.Brand>
            <Navbar.Brand href="#home">
                <img src={logo} className="App-logo" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Add Record</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>

    </Navbar>
)

export default navbar