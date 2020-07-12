import React from 'react';
import { Card, Button } from 'react-bootstrap';
import RecordDetails from '../../containers/RecordDetails';
import { withRouter } from 'react-router-dom';

const onDetailsClick = (props) => {
    props.history.push(`/record-details/${props.id}`);
}

const Record = (props) => {
    return (
        <Card style={{ width: '18rem' }} className="record-card mt-5 mb-5"  onClick={()=> onDetailsClick(props)} >
            <Card.Img variant="top" src={props.pic} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.artist} - {props.album}</Card.Title>
                {props.tracks.slice(0,3).map((track,i) => (
                    <Card.Text key={i}>
                        {track}
                    </Card.Text>
                ))}
                {props.tracks.length > 3 &&  <Card.Text>
                        . . .
                    </Card.Text>}
                <div className="d-flex justify-content-center mt-auto">
                    <Button variant="success" onClick={()=> onDetailsClick(props)}>Details</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default withRouter(Record)