import React, { Component } from 'react'
import './geomuse-styles/geomuse-side-bar.css'
import { Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';



export default class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        console.log(this.props.userDetails)
        return (
            <div className="side-menu-component">
                <Nav vertical>
                    <Container>
                        <Row className="padding-top-bottom">
                            <Col lg="4">
                                <div className="geomenu-profile" style={{backgroundImage: 'url('+ this.props.userDetails.picture +')'}}></div>
                            </Col>
                            <Col lg="8" className="profile-text">
                                <div className="text-white">
                                    Musango Wope
                                </div>
                                {/*<div className="text-white">Logout</div>*/}
                            </Col>
                        </Row>
                    </Container>

                </Nav>
                <Container>
                    <div className="white-spacer"/>
                </Container>
                <Nav vertical className="geomenu-items">
                    <NavItem>
                        <NavLink className="text-white" href="#">Friends' Feed</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">Chat</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">Playlists</NavLink>
                    </NavItem>
                </Nav>

                <Container>
                    <div className="white-spacer"/>
                </Container>

                <Nav vertical>
                    <NavItem className="padding-top-bottom">
                        <Container>
                            <p className="text-uppercase text-white">Recently Playlist</p>
                        </Container>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" onClick={this.logout.bind(this)}>Logout</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}