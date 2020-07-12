import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import React, { useState } from 'react';


const Track = (props) => {
    //const title = [title, setTitle] = useState(props.title)

    const handleChange = (evt) => {
        const value = evt.target.value;
        props.onTrackChange(props.id, value);
    }

    const handleOnDelete = () => {
        props.onTrackDelete(props.id);
    }

    return (
        <Form.Group controlId="track">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Enter track"
                    aria-label="Track"
                    aria-describedby="basic-addon2" value={props.title} onChange={handleChange} />
                <InputGroup.Append>
                    <Button variant="secondary" size="sm" onClick={handleOnDelete}>delete</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form.Group>
            )
        }

export default Track