import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../stylesheets/login.css'
import '../App.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <img style={{width: '102%', marginTop: '0%', opacity: '0.2'}}src='./images/city.jpeg'></img>
      <div className="container login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              style={{ textAlign: 'center'}}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{ textAlign: 'center'}}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" style={{
            marginTop: '2%',
            marginBottom: '2%',
            backgroundColor: '#66FCF1',
            color:' white',
            border: 'none',
            cursor: 'pointer'
          }} disabled={!validateForm()}>
            Login
          </Button>

        </Form>
      </div>
    </div>
  );


}

