import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const Login = () => {

  const loginUser = (e) => {
    e.preventDefault();
    console.log("asd");
  }

  return (
    <div>
    <Container>
      <Form className='form_container' onSubmit={(e)=>loginUser(e)}>
        <Col md={3}> {/* md 속성을 사용하여 중간 크기 화면에서 폼의 크기를 조절 */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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