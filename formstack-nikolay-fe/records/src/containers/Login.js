import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';
import Login from '../components/Login/Login';
import { Container, Row, Col } from 'react-bootstrap';

class LoginContainer extends Component {


    render () {
        return (
            <div className="d-flex justify-content-around flex-wrap mt-5">
                <Login {...this.props}/>
            </div>
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