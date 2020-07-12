import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';
import Record from '../components/Record/Record';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { loadRecords } from '../actions/records'

class RecordsContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadItems(this.props.user.username);
    }

    getContent() {
        if (this.props.isLoading) {
            return (
                <Spinner animation="grow" variant="dark" className="mt-5" />
            )
        }

        if (this.props.records && this.props.records.length) {
            return (this.props.records.map(rec => (
                        <Record key={rec.id} {...rec} />
                    ))
            )
        } else {
            return (
                <Alert variant='dark' className="w-50 mt-5">No Data</Alert>
            )
        }
    }

    render() {
        return (<div className="d-flex justify-content-around flex-wrap mb-5">
                {this.getContent()}
                </div>)
    }
}

const mapStateToProps = state => {
    return {
        records: state.records.items,
        isLoading: state.records.isLoading,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadItems: (username) => dispatch(loadRecords(username))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordsContainer);