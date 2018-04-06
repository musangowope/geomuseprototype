import React, { Component } from 'react'
import './geomuse-styles/action-music.css'
import {Container, Row, Col} from 'reactstrap'

import { Route, Link } from 'react-router-dom';
import YourTaste from './YourTaste'
import Explore from './Explore'
import TrendingPlaylists from './TrendingPlaylists'

export default class ActionMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exploreBg: []
        };
    }
    render() {
        return (
            <div className='action-music-component'>
                <div className="action-music-items padding-top-bottom-big on-top">
                    <Container>
                        <Row className="text-center">
                            <Col className="text-uppercase action-item">
                                <Link to="/geomuse" className="font-smaller">
                                    <strong className="text-white">
                                        Your Taste
                                    </strong>
                                </Link>
                                <div className="action-item-underline"/>
                            </Col>
                            <Col className="text-uppercase action-item">
                                <Link to="/geomuse/explore" className="font-smaller">
                                    <strong className="text-white">
                                        Explore
                                    </strong>
                                </Link>
                                <div className="action-item-underline"/>
                            </Col>
                            <Col className="text-uppercase action-item">
                                <Link to="/geomuse/trending-playlists" className="font-smaller">
                                    <strong className="text-white">
                                        Trending Playlists
                                    </strong>
                                </Link>
                                <div className="action-item-underline"/>
                            </Col>
                            <Col className="text-uppercase action-item">
                                <a className="font-smaller">
                                    <strong className="text-white">
                                        Featured Artists
                                    </strong>
                                </a>
                                <div className="action-item-underline"/>
                            </Col>
                            <Col className="text-uppercase action-item">
                                <a className="font-smaller">
                                    <strong className="text-white">
                                        Geomuse Map
                                    </strong>
                                </a>
                                <div className="action-item-underline"/>
                            </Col>
                            <Col className="text-uppercase action-item">
                                <a className="font-smaller">
                                    <strong className="text-white">
                                        Create Playlist
                                    </strong>
                                </a>
                                <div className="action-item-underline"/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="action-content">
                    <Route exact path={this.props.routeURL} component={YourTaste} />
                    <Route path={`${this.props.routeURL}/explore`} component={Explore} />
                    <Route path={`${this.props.routeURL}/trending-playlists`} component={TrendingPlaylists} />
                </div>


                <div className="action-shadow-overlay"/>
            </div>
        )
    }
}