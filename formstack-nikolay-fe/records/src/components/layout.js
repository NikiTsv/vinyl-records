import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import Footer from './footer';
import * as actionTypes from '../actions/actionTypes';

const layout = (props) => {
    return (<>
        <Navbar {...props} />
        <div className="m-1 overflow-auto" style={{height: '650px'}}>
            {props.children}
        </div>
        <Footer />
    </>)
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({type: actionTypes.LOGOUT})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(layout);

