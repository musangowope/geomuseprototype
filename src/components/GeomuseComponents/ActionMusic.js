import React, { Component } from 'react'
import './geomuse-styles/action-music.css'
import {Container, Row, Col} from 'reactstrap'
import Explore from './Explore'

import axios from 'axios'

import exploreBg from '../../../src/assets/images/geomuse-assets/explor-bg.jpeg'
import searchBg from '../../../src/assets/images/geomuse-assets/search-bg.jpeg'
import playlistBg from '../../../src/assets/images/geomuse-assets/create-playlist-bg.jpg'


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
                <div className="action-music-items padding-top-bottom-big">
                    <Container>
                        <Row className="text-center">
                            <Col className="text-uppercase action-item">
                                <a><strong>Explore</strong></a>
                                <div className="action-item-underline"/>
                            </Col>
                            <Col className="text-uppercase action-item">
                                <a><strong>Trending Playlist</strong></a>
                                <div className="action-item-underline"/>
                            </Col>
                            <Col className="text-uppercase action-item">
                                <a><strong>Featured Artists</strong></a>
                                <div className="action-item-underline"/>
                            </Col>
                            <Col className="text-uppercase action-item">
                                <a><strong>Geomuse Map</strong></a>
                                <div className="action-item-underline"/>
                            </Col>
                            <Col className="text-uppercase action-item">
                                <a><strong>Create Playlist</strong></a>
                                <div className="action-item-underline"/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="action-content">
                    <Explore/>
                </div>


                <div className="action-shadow-overlay"/>
            </div>
        )
    }
}