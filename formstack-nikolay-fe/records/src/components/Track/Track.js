import { Form } from 'react-bootstrap';
import React, {useState} from 'react';


const track = (props) => {
    //const title = [title, setTitle] = useState(props.title)

    const handleChange = (evt) => {
        const value = evt.target.value;
        props.onTrackChange(props.id, value);
    }

    return (
        <Form.Group controlId="track">
            <Form.Control type="text" placeholder="Enter track title" value={props.title} onChange={handleChange} />
        </Form.Group>
    )
}

export default track