import React, { useCallback, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../../stylesheets/login.css';
import '../../App.css';
import AuthenticationService from "../../services/authentication.service";
import { Link } from "react-router-dom";


export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [error, setError] = useState("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      AuthenticationService.register(
        username,
        email,
        password,
        passwordConfirmation
      )
        .then(() => {
          AuthenticationService.login(email, password)
          .then(() => {
            window.location.replace("/");
          })
        })
        .catch((e) => {
          setError(e.response.data.errors);
        });
    },
    [username, email, password, passwordConfirmation]
  );

  function validateForm() {
    return email.length > 0 && password.length >= 8 && password == passwordConfirmation;
  }

  return (
    <div>
      <img style={{width: '102%', marginTop: '0%', opacity: '0.2', height: '100vh'}}src='./images/city.jpeg'></img>
      <div className="container login">
        <Form onSubmit={onSubmit}>
          <Form.Group size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              style={{ textAlign: 'center'}}
              type="text"
              value={username}
              maxLength="20"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              style={{ textAlign: 'center'}}
              type="email"
              value={email}
              maxLength="60"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{ textAlign: 'center'}}
              type="password"
              value={password}
              maxLength="30"
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
            backgroundColor: '#71f1e8',
            color:'#224e4c',
            border: 'none',
            cursor: 'pointer'
          }} disabled={!validateForm()}>
            Register
          </Button>
          {error ? <p style={{color: '#fbff8d'}}>{error}</p> : false }
          { ((passwordConfirmation != password) && (passwordConfirmation.length >= 1)) ?  <p style={{color: '#fbff8d'}}>Passwords don't match</p> : false }
        </Form>
        <Link to='/login' style={{paddingBottom: '10px'}} className="textGlow">I just remembered my account! Back to login</Link>
      </div>
    </div>
  );
}

