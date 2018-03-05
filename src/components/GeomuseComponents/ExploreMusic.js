import React, { Component } from 'react'
import './geomuse-styles/explore-music.css'
import {Container, Row, Col} from 'reactstrap'

import axios from 'axios'

import exploreBg from '../../../src/assets/images/geomuse-assets/explor-bg.jpeg'
import searchBg from '../../../src/assets/images/geomuse-assets/search-bg.jpeg'
import playlistBg from '../../../src/assets/images/geomuse-assets/create-playlist-bg.jpg'


export default class ExploreMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exploreBg: []
        };
    }

    componentDidMount() {
        axios.get("https://api.jamendo.com/v3.0/tracks/?client_id=0c736982&format=jsonpretty&limit=1&fuzzytags=hiphop&featured=1")
            .then(response => {
                // console.log(response.data.results)
                this.setState({
                    exploreBg : response.data.results[0]
                })
                console.log(this.state.exploreBg)

            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        return (
            <div className='explore-music-component'>
                <div className="explore-mini-tab-container">
                    <div className="explore-mini-tab animated fadeInUp">
                        <div className="shadow-overlay">
                            <div className="explore-mini-tab-content">
                                <Container>
                                    <Row className="text-center">
                                        <Col>
                                            <h2 className="text-white">Search</h2>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="explore-bg" style={{backgroundImage: 'url('+playlistBg+')'}}/>
                    </div>

                    <div className="explore-mini-tab animated fadeInUp">
                        <div className="shadow-overlay">
                            <div className="explore-mini-tab-content">
                                <Container>
                                    <Row className="text-center">
                                        <Col>
                                            <h2 className="text-white">Explore New Music</h2>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="explore-bg" style={{backgroundImage: 'url('+exploreBg+')'}}/>
                    </div>
                    <div className="explore-mini-tab animated fadeInUp">
                        <div className="shadow-overlay">
                            <div className="explore-mini-tab-content">
                                <Container>
                                    <Row className="text-center">
                                        <Col>
                                            <h2 className="text-white">Create Playlist</h2>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="explore-bg" style={{backgroundImage: 'url('+searchBg+')'}}/>
                    </div>

                </div>
            </div>
        )
    }
}