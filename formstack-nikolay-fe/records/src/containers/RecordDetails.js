import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';
import { Container, Row, Col } from 'react-bootstrap';
import { createSelector } from 'reselect';
import { filteredByIdSelector } from '../services/records.utility';
import RecordDetailsComponent from '../components/RecordDetails/RecordDetails'
import { withRouter } from 'react-router-dom';

class RecordDetails extends Component {

    render() {
        return (
            <RecordDetailsComponent {...this.props.record} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        username: state.user.username,
        record: filteredByIdSelector(state, ownProps)
    };
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RecordDetails));