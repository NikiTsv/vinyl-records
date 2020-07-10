import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import Footer from './footer';

const layout = (props) => {
    console.log(props)
    return (<>
        <Navbar />
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

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(layout);

