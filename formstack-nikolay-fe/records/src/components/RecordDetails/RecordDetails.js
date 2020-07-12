import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Button, Alert } from 'react-bootstrap';

const onEditClick = (props) => {
    props.history.push(`/edit/${props.id}`);
}

const RecordDetails = (props) => {
    if (!props.id) {
        return (<Alert variant='dark' className="w-50 mt-5">No Data</Alert>)
    } else {
        return (<div className="d-flex justify-content-around flex-wrap">
            <Card style={{ width: '18rem' }} className="mt-5 pb-5">
                <Card.Img variant="top" src={props.pic} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{props.artist} - {props.album}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Text>
                        ------Tracks---------
                    </Card.Text>
                    {props.tracks && props.tracks.length && props.tracks.slice(0, 3).map((track, i) => (
                        <Card.Text key={i}>
                            {track}
                        </Card.Text>
                    ))}
                    {props.tracks.length > 3 && <Card.Text>
                        . . .
                    </Card.Text>}
                    <div className="d-flex justify-content-center mt-auto">
                        <Button variant="primary" onClick={()=>onEditClick(props)}>Edit</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>)
    }
}


export default withRouter(RecordDetails)