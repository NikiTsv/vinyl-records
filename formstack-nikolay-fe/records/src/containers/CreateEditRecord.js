import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';
import { Container, Row, Col } from 'react-bootstrap';
import { putRecord } from "../actions/records";
import CreateEditRecordComponent from '../components/CreateEditRecord/CreateEditRecord' ;

class CreateEditRecord extends Component {

    render () {
        return (
           <CreateEditRecordComponent {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        // addRecord: (username) => dispatch({type: actionTypes.LOGIN, payload: {username}})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditRecord);