import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

export const Login = ( ) => {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();
    
    // setAuthenticate(true);
    dispatch(authenticateAction.login({id,password}));

    navigate('/');
  }

  return (
    <div>
    <Container>
      <Form className='form_container' onSubmit={(e)=>loginUser(e)}>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setId(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ width: "100%" }}>
            로그인
          </Button>
        </Col>
      </Form>
    </Container>
    </div>

  );
};