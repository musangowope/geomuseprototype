import React, { Component } from 'react'
import './geomuse-styles/player.css'
import { Row, Col, Container } from 'reactstrap';
import FaPlay from 'react-icons/lib/fa/play'
import FaForward from 'react-icons/lib/fa/forward'
import FaHeart from 'react-icons/lib/fa/heart'

export default class YourTaste extends Component {
    render() {
        return (
            <div className='player-component'>
                <div className="player-component-container">
                    <div className="player-action-container">
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                                <FaPlay width="40px" height="40px" className="text-white"/>
                            </Col>
                            <Col>
                                <FaForward width="40px" height="40px" className="text-white"/>
                            </Col>
                            <Col>
                                <FaHeart width="40px" height="40px" className="text-white"/>
                            </Col>
                        </Row>
                    </div>
                    <div className="gauge-container">
                        <div className="guage"></div>
                    </div>
                </div>
            </div>
        )
    }
}