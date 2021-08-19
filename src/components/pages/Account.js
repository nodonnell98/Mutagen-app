import React, { useEffect, useState, useCallback } from "react";
import UserService from "../../services/user.service";
import { Form, Button } from "react-bootstrap";

export default function Account() {
  const [username, setUsername] = useState('a');
  const [email, setEmail] = useState('a');
  const [error, setError] = useState();

  const userId = localStorage.getItem("id")

  const [edit, setEdit] = useState(false)

  const retrieveUser = useCallback(() => {
    UserService.get(userId).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [setUsername, setEmail, userId]);

  useEffect(() => {
    retrieveUser();
  }, [retrieveUser]);



  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      let params = {
        user: {
          username: username,
          email: email,
        },
      };

      UserService.update(userId, params)
        .then((e) => {
          setEdit(!edit);
        })
        .catch((e) => {
          setError(e.response.data.errors);
          console.log(error)
        });
    },
    [username, email, userId, edit, error]
  );

  function validateForm() {

    return username.length > 0 && email.length > 0;
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit((prevEdit) => !prevEdit);
  }

  return (
    <div style={{ marginTop: "15vh" }}>
      <img alt="neon lights in underpass" className="splash blur" src="/images/character.jpg"></img>
      <div
        style={{ padding: "5em", width: '80vh', opacity: '1' }}
        className="container glass flexBoxColumn fadeIn"
      >
        <Form className="flexGrow1" onSubmit={onSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Username</Form.Label>
          <Form.Control
            disabled={!edit}
            autoFocus
            style={{
              textAlign: "center",
              backgroundColor: "#224e4c",
              color: "white",
            }}
            type="text"
            maxLength="20"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="class">
          <Form.Label>Email</Form.Label>
          <Form.Control
            disabled={!edit}
            style={{
              textAlign: "center",
              backgroundColor: "#224e4c",
              color: "white",
            }}
            type="text"
            maxLength="60"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        { edit ?  <Button
          block
          size="lg"
          type="submit"
          style={{
            marginTop: "2%",
            marginBottom: "2%",
            backgroundColor: "#71f1e8",
            color: "#2a615e",
            border: "none",
            cursor: "pointer",
          }}
          disabled={!validateForm()}
        >
          Update
        </Button> :
         <Button
         block
         size="lg"
         type="submit"
         style={{
           marginTop: "2%",
           marginBottom: "2%",
           backgroundColor: "#71f1e8",
           color: "#2a615e",
           border: "none",
           cursor: "pointer",
         }}
         onClick={(e) => handleEdit(e)}
       >
         Edit
       </Button> }

      </Form>
      </div>

    </div>
  );
}
