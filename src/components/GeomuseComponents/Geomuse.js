import React, { Component } from 'react'
import './geomuse-styles/geomuse.css'
import GeoMuseMap from './GeoMuseMap'


export default class Geomuse extends Component {
    render() {
        return (
            <div className='geomuse-component'>
                <GeoMuseMap/>
            </div>
        )
    }
}