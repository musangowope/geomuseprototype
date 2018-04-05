import React, { Component } from 'react'
import './geomuse-styles/geomuse.css'
import GeoMuseMap from './GeoMuseMap'
import SideMenu from './SideMenu'
import ActionMusic from './ActionMusic'


export default class Geomuse extends Component {
    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }
    render() {
        const { profile } = this.state
        return (
            <div className='geomuse-component'>
                <SideMenu userDetails={profile}  auth={this.props.auth}/>
                {/*<GeoMuseMap/>*/}
                <ActionMusic/>
            </div>
        )
    }
}