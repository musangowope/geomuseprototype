import React, { Component } from 'react';
import HomePageHeader from './HomePageHeader'
import HomePageBody from './HomePageBody'

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomePageHeader auth={this.props.auth}/>
                <HomePageBody/>

            </div>

        );
    }
}

export default HomePage;
