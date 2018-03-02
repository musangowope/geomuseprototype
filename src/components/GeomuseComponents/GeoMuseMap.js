import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import './geomuse-styles/geomuse.css'
import { Row, Col }  from 'reactstrap'

import whatIsBg1 from '../../assets/images/home-page-assets/what-is-bg-1.jpeg'
import whatIsBg2 from '../../assets/images/home-page-assets/what-is-bg-2.jpg'
import whatIsBg3 from '../../assets/images/home-page-assets/what-is-bg-3.jpeg'
import whatIsBg4 from '../../assets/images/home-page-assets/what-is-bg-4.jpeg'

const Thumbnail = ({ content }) => <div>{ content }</div>;

let thumbnailObjects =  [
    {
        lat: 40,
        lng: -73.1,
        muserProfile: whatIsBg1
    },
    {
        lat: 51,
        lng: -73.2,
        muserProfile: whatIsBg2
    },
    {
        lat: 62,
        lng: -73.4,
        muserProfile: whatIsBg3
    },

    {
        lat: 55,
        lng: -70,
        muserProfile: whatIsBg4
    },
]


export default class GeoMuseMap extends Component {
    static defaultProps = {
        center: { lat: 40.7446790, lng: -73.9485420 },
        zoom: 4
    }

    render() {
        return (
            <div className='geomuse-component'>
                <div className="google-map">
                    <GoogleMapReact
                        defaultCenter={ this.props.center }
                        defaultZoom={ this.props.zoom }>
                        {thumbnailObjects.map(function (thumbnailObject, index) {
                            console.log(index)
                            return <Thumbnail
                                key={index}
                                lat={ thumbnailObject.lat }
                                lng={ thumbnailObject.lng }
                                content={
                                    <div className="geomuser-container">

                                        <div className="animated fadeIn geomuser" style={{backgroundImage: 'url('+ thumbnailObject.muserProfile +')'}}>
                                            <div className="playlist-preview animated fadeIn">
                                                <div className="preview-header" style={{backgroundImage: 'url('+ thumbnailObject.muserProfile +')'}}>
                                                    {/*<div className="shadow-overlay">*/}
                                                        {/*<h4 className="text-white">Playlist Name</h4>*/}
                                                    {/*</div>*/}
                                                </div>
                                                <div className="preview-img-body on-top">
                                                    <Row>
                                                        <Col>
                                                            <h4 className="text-white">Hello</h4>
                                                        </Col>
                                                        <Col>
                                                            <h4 className="text-white">Hello</h4>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }
                            />
                        })}
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}