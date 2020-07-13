import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';
import { Container, Row, Col } from 'react-bootstrap';
import { createEditRecord } from "../actions/records";
import CreateEditRecordComponent from '../components/CreateEditRecord/CreateEditRecord';
import { createSelector } from 'reselect';
import { filteredByIdSelector } from '../services/records.utility';
import { withRouter } from 'react-router-dom';

class CreateEditRecord extends Component {

    render() {
        return (
            <CreateEditRecordComponent {...this.props}/>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        username: state.user.username,
        record: filteredByIdSelector(state, ownProps)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createOrEditRecord: (payload, changeRouteFn) => dispatch(createEditRecord(payload, changeRouteFn)),
        navToHome: () =>  ownProps.history.push(`/records`)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateEditRecord));