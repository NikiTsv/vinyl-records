import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';
import Login from '../components/Login/Login';
import { Container, Row, Col } from 'react-bootstrap';

class LoginContainer extends Component {

    render () {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col >
                        <Login/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        records: state.records
    };
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);