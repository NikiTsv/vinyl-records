import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';
import Login from '../components/Login/Login';
import { Container, Row, Col } from 'react-bootstrap';

class LoginContainer extends Component {


    render () {
        return (
            <Container className="mt-5">
                <Row>
                    <Col></Col>
                    <Col>
                        <Login {...this.props}/>
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
        login: (username) => dispatch({type: actionTypes.LOGIN, payload: {username}})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);