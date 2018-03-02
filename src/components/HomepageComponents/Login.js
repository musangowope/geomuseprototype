import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import Auth from "../../Auth/Auth";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    loginWithGoogle() {
        console.log("Google Login")
        this.props.auth.loginWithGoogle();
    }

    render() {
        return (
            <div className="social-login">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="text-white text-center">Social Login</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button className="facebook-button text-white" block>Login with Facebook</Button>
                        </Col>
                    </Row>
                    <div className="white-spacer"/>
                    <Row>
                        <Col className="text-center">
                            <Button className="google-button text-white" onClick={this.loginWithGoogle.bind(this)} block>Login with Google</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;
