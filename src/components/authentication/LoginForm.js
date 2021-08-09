import React, { useState } from "react";
import {Form, Button} from "react-bootstrap";
import '../../stylesheets/login.css'
import '../../App.css'
import AuthenticationService from "../../services/authentication.service";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    AuthenticationService.login(email, password)
        .then(() => {
          window.location.replace("/");
        })
        .catch((e) => {
          setError(e.response.data.errors);
        });
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
          <Button block size="lg" type="submit"
            style={{
              marginTop: '2%',
              marginBottom: '2%',
              backgroundColor: '#71f1e8',
              color:'#224e4c',
              border: 'none',
              cursor: 'pointer'
            }}
            disabled={!validateForm()
          }>
            Login
          </Button>
          <Link to='/register' style={{ paddingBottom: '10px'}} className="textGlow">Don't have an account? Register here</Link>
          {error ? <p style={{color: '#fbff8d'}}>{error}</p> : false }

        </Form>
      </div>
    </div>
  );
}

