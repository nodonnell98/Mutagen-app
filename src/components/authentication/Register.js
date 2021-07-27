import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../../stylesheets/login.css';
import '../../App.css';
import AuthenticationService from "../../services/authentication.service";


export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    AuthenticationService.register(
      username,
      email,
      password,
      passwordConfirmation
    )
      .then(() => {
        window.location.replace("/");
      })
      .catch((e) => {
        // setError(e.response.data.join(". "));
      });
  }

  function validateForm() {
    return email.length > 0 && password.length > 8 && password == passwordConfirmation;
  }

  return (
    <div>
      <img style={{width: '102%', marginTop: '0%', opacity: '0.2'}}src='./images/city.jpeg'></img>
      <div className="container login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              style={{ textAlign: 'center'}}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

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

          <Form.Group size="lg" controlId="password_confirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              style={{ textAlign: 'center'}}
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
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
            Register
          </Button>

        </Form>
      </div>
    </div>
  );


}

