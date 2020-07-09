import React from 'react';
import logo from './record-logo.png';
import './App.css';
import { Navbar, Form, FormControl, Nav, Button } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Vinyl Records</Navbar.Brand>
                <Navbar.Brand href="#home">
                    <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Add</Nav.Link>
                    </Nav>
                    {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                    {/* <Navbar.Brand href="#home">by Nikolay Tsvetanov</Navbar.Brand> */}

                </Navbar.Collapse>
            </Navbar>
            <div className="footer">
                <div className="container"><span className="text-muted">
                    by Nikolay Tsvetanov</span>
                    </div>
            </div>
        </div>
    );
}

export default App;
