import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

const Login = (props) => {
    const [username, setUsername] = useState('demo');
    console.log(props)
    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handleOnClick = () => {
        console.log('logging in...');
        props.login(username);
        props.history.push('/records');
    }

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">

                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={username} onChange={handleUsernameChange} />
                <Form.Text className="text-muted">
                    Demo login - please type a username or use default 'demo' user
        </Form.Text>

            </Form.Group>
            {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value="demo" />
        </Form.Group> */}
            {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
            <Button variant="primary" type="button" onClick={handleOnClick}>
                Login
        </Button>
        </Form>
    )
}

export default withRouter(Login);