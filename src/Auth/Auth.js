import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Container, Row, Col } from "reactstrap";

const Auth = (props) => {
  return (
    <div className="auth">
    <Container className="auth-container">
      <Row>
        <Col md="6">
          <Signup updateToken={props.updateToken} showLoading={props.showLoading} setShowLoading={props.setShowLoading}/>
        </Col>
        <Col md="6">
          <Login updateToken={props.updateToken} showLoading={props.showLoading} setShowLoading={props.setShowLoading}/>
        </Col>
      </Row>
    </Container>    
    </div>
  );
};

export default Auth;
