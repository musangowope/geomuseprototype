import React, { Component } from 'react'
import './geomuse-styles/explore.css'
import {Row, Col, Container, Label, Input } from 'reactstrap';


export default class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commonTags: [
                "happy",
                "emotional",
                "electronic",
                "hiphop",
                "jazz",
                "indie",
                "classic",
                "dance",
                "dark",
                "chillout",
                "ambient",
                "folk",
                "metal",
                "latin",
                "funk",
                "RNB",
                "Reggae",
                "Punk",
                "Counter",
                "House",
                "Blues",
                "Energetic",
                "Romance",
                "Sad",
            ],
            searchTags: []
        }
    }

    addCommonTags = (commonTag) => (e) => {
        e.preventDefault
        console.log(commonTag)
        this.setState(prevState => ({
            searchTags: [...this.state.searchTags, commonTag]
        }));
        console.log(this.state.searchTags)
    }



    render() {
        return (
            <div className='explore-component padding-top-bottom-big'>
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h4>Explore and Discover New Music</h4>
                        </Col>
                    </Row>
                    <Row className="mt-4 tag-input-group">
                        <Col lg="4">
                            <Input className="tag-input" placeholder="Artist, activity, genre or mood" bsSize="lg" />
                        </Col>
                        {this.state.searchTags.map((searchTag, index) => (
                            <Col lg="auto animated fadeInLeft" key={index}>
                                <div className="search-tag">
                                    <span className="text-white">{searchTag}</span>
                                </div>
                            </Col>
                        ))}


                    </Row>

                    <Row className="text-center mt-5 mb-3">
                        <Col>
                            <h4>Common Tags</h4>
                        </Col>
                    </Row>

                    <Row className="text-center common-selection-group on-top">
                        {this.state.commonTags.map((commonTag, index) => (
                            <Col lg="auto" key={index} className="mb-1 animated fadeInUp">
                                <div className="common-tag" onClick={this.addCommonTags(commonTag)}>
                                    {commonTag}
                                </div>
                            </Col>
                            )
                        )}
                    </Row>



                </Container>
            </div>
        )
    }
}