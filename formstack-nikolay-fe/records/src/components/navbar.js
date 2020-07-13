import React from 'react';
import logo from '../record-logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const handleOnClickHome = (props) => {
    props.history.push('/records');
}

const handleOnClickNewRecord = (props) => {
    props.history.push('/add-record');
}
const handleOnClickBrand = (props) => {
    props.history.push('/');
}

const handleOnClickLogout = (props) => {
    props.logout();
    props.history.push('/');
}

const handleOnClickLogin = (props) => {
    props.history.push('/');
}

export const NavbarComponent = (props) => {
    return (
        <Navbar bg="light" expand="lg" className="navbar-fixed-top">
            <Container>
                <Navbar.Brand className='nav-lnk' onClick={()=>handleOnClickBrand(props)}>Vinyl Records</Navbar.Brand>
                <Navbar.Brand>
                    <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {props.user.isAuthenticated && (<span className='nav-lnk home-lnk'  onClick={()=>handleOnClickHome(props)}>Home</span>)}
                        {props.user.isAuthenticated && (<span className='nav-lnk add-rec-lnk'  onClick={()=>handleOnClickNewRecord(props)}>Add Record</span>)}
                        {props.user.isAuthenticated && (<span className='nav-lnk logout-lnk'  onClick={()=>handleOnClickLogout(props)}>Logout</span>)}
                        {!props.user.isAuthenticated && (<span className='nav-lnk login-lnk'  onClick={()=>handleOnClickLogin(props)}>Login</span>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default withRouter(NavbarComponent)