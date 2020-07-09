import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';
import Login from '../components/Login/Login';

class LoginContainer extends Component {

    render () {
        return (
            <>
                <Login/>
            </>
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