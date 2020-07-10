import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';
import Record from '../components/Record/Record';
import { Container, Row, Col } from 'react-bootstrap';

class RecordsContainer extends Component {

    render() {
        return (
            <div className="d-flex justify-content-around flex-wrap">
                {this.props.records.map(rec => (
                                <Record key={rec.id} {...rec} />
                        ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        records: state.records.items
    };
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordsContainer);