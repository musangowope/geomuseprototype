import React, { Component } from 'react'
import './geomuse-styles/action-music.css'
import {Container, Row, Col} from 'reactstrap'

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
            <div className='action-music-component'>
                <div className="action-mini-tab-container">
                    <div className="action-item" style={{backgroundImage: "url("+exploreBg+")"}}>
                        <div className="shadow-overlay">
                            <h4 className="text-white">Search</h4>
                        </div>
                    </div>
                    <div className="action-item" style={{backgroundImage: "url("+searchBg+")"}}>
                        <div className="shadow-overlay">
                            <h4 className="text-white">Explore Music</h4>
                        </div>
                    </div>
                    <div className="action-item" style={{backgroundImage: "url("+playlistBg+")"}}>
                        <div className="shadow-overlay">
                            <h4 className="text-white">Create Playlist</h4>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}