import React, { Component } from 'react';
import './homepage-styles/HomeHeaderStyle.css';
import Login from './Login'
import HomeNavbar from './HomeNavbar'

import Bgvideo from '../../assets/videos/bg-video-3.mp4'
import HeaderBg1 from '../../assets/images/home-page-assets/header-bg-1.jpeg'
import HeaderBg2 from '../../assets/images/home-page-assets/header-bg-2.jpeg'
import HeaderBg3 from '../../assets/images/home-page-assets/header-bg-3.jpg'
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';




class HomePageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            currentBg: {
                backgroundImage: 'url('+ HeaderBg1 +')',
            },
            backgroundIndex: 0,
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    changeBg () {
        this.setState(prevState => ({
            backgroundIndex: prevState.backgroundIndex + 1
        }));

        if(this.state.backgroundIndex === 1) {
            this.setState({
                currentBg: {
                    backgroundImage: 'url('+ HeaderBg1 +')'
                },
            })
        }

        if(this.state.backgroundIndex === 2) {
            this.setState({
                currentBg: {
                    backgroundImage: 'url('+ HeaderBg2 +')'
                },
            })
        }

        if(this.state.backgroundIndex === 3) {
            this.setState({
                currentBg: {
                    backgroundImage: 'url('+ HeaderBg3 +')'
                },
            })
        }

        if(this.state.backgroundIndex > 4) {
            this.setState({
                backgroundIndex: 0
            })
        }

    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
        this.changeBgInterval = setInterval(() => this.changeBg(), 6000)

    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.changeBgInterval)
    }

    render() {

        return (
            <div className="home-page-header">
                <HomeNavbar auth={this.props.auth}/>
                <section className="header-section">
                    <div className="shadow-overlay"></div>
                    <div className="tune-overlay">
                        <div className="tune-pulse">
                            <h4 className="text-white tune-number">-2:{this.state.seconds}FM</h4>
                        </div>
                    </div>

                    <div className="bg-position">
                        <div className="bg-container">
                            <div className="bg animated fadeInUp header-bg" style={this.state.currentBg}>
                            </div>
                        </div>
                    </div>

                    <div className="header-content on-top">
                        <Container>
                            <Row>
                                <Col>
                                    <h1 className="text-white header-title text-center">Listen to local handcrafted playlists</h1>
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col className="text-white">
                                    <Button className="listen-now-btn" onClick={this.toggle}>Listen Now</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <div className="login-modal">
                            <ModalHeader toggle={this.toggle} className="login-header">
                                Login
                            </ModalHeader>
                            <ModalBody className="login-modal-body">
                                <video width="100%" autoPlay loop muted>
                                    <source src={Bgvideo} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                                <Login auth={this.props.auth}/>
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </div>

                    </Modal>


                </section>
            </div>

        );
    }
}

export default HomePageHeader;
