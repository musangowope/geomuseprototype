import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap'

//Styling
import './homepage-styles/HomeBodyStyles.css'

//Assets
import whatIsBg1 from '../../assets/images/home-page-assets/what-is-bg-1.jpeg'
import whatIsBg2 from '../../assets/images/home-page-assets/what-is-bg-2.jpg'
import whatIsBg3 from '../../assets/images/home-page-assets/what-is-bg-3.jpeg'
import whatIsBg4 from '../../assets/images/home-page-assets/what-is-bg-4.jpeg'

class HomePageBody extends Component {
    render() {
        let whatIsImages = [
            {
                backgroundImage: 'url('+ whatIsBg1 +')'
            },
            {
                backgroundImage: 'url('+ whatIsBg2 +')'
            },
            {
                backgroundImage: 'url('+ whatIsBg3 +')'
            },
            {
                backgroundImage: 'url('+ whatIsBg4 +')'
            },
        ]
        return (
            <div className="home-body mt-5">
                <section className="what-is-section">
                    <Container>
                        <Row>
                            <Col lg="6" xs="12">
                                <h2>
                                    <strong>
                                        What is Geomuse?
                                    </strong>
                                </h2>
                                <h4>Create a playlist</h4>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Fusce tempor mauris non aliquet auctor. Mauris vitae nulla
                                    lacinia, lobortis libero a, tincidunt nisl.
                                </p>
                                <h4>Listen to other playlists based o location</h4>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Fusce tempor mauris non aliquet auctor. Mauris vitae nulla
                                    lacinia, lobortis libero a, tincidunt nisl.
                                </p>
                                <h4>Like comment and share</h4>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Fusce tempor mauris non aliquet auctor. Mauris vitae nulla
                                    lacinia, lobortis libero a, tincidunt nisl.
                                </p>
                            </Col>
                            <Col lg="6" xs="12">
                                <div className="grid-container">
                                    {whatIsImages.map(function (whatIsImage, index) {
                                        return <div className="grid-item" key={index} style={whatIsImage}></div>
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </div>
        );
    }
}

export default HomePageBody;
