import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'
import './geomuse-styles/trending-playlists.css'

export default class TrendingPlaylists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exploreBg: []
        };
    }
    render() {
        return (
            <div className="trending-playlist-component">
                <h1>Trending Playlists</h1>
            </div>
        )
    }
}