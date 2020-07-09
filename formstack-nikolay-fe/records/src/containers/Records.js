import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';

class RecordsContainer extends Component {

    render () {
        return (
            <>

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

export default connect(mapStateToProps, mapDispatchToProps)(RecordsContainer);