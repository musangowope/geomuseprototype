import React, { Component } from 'react'
import './geomuse-styles/explore.css'
import {Row, Col, Container, Label, Input } from 'reactstrap';
import FaClose from 'react-icons/lib/fa/close'
import axios from 'axios'


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

    searchTagInputHandle = (e) => {
        e.preventDefault
        if(e.key === 'Enter') {
            console.log(e.target.value)
            let inputTag = e.target.value
            if(!this.state.searchTags.includes(inputTag)) {
                this.setState(prevState => ({
                    searchTags: [...this.state.searchTags, inputTag]
                }));
                this.exploreMusic()
            }
        }

    }

    addCommonTags = (commonTag) => (e) => {
        e.preventDefault
        if(this.state.searchTags.includes(commonTag)) {
        }

        else {
            console.log(commonTag)
            this.setState(prevState => ({
                searchTags: [...this.state.searchTags, commonTag]
            }));
            this.exploreMusic()
        }
    }

    exploreMusic = () => {
        let exploreTags = this.state.searchTags
        console.log(exploreTags.toString())
        axios.get("https://api.jamendo.com/v3.0/tracks/?client_id=0c736982&format=jsonpretty&limit=5&fuzzytags="+ exploreTags +"&speed=high+veryhigh&include=musicinfo&groupby=artist_id&order=popularity_week")
            .then(response => {
                console.log(response.data.results)
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });

    }

    removeSearchTag = (searchTag) => (e) => {
        e.preventDefault
        let replaceSearchTags = this.state.searchTags
        let searchTagIndex = replaceSearchTags.indexOf(searchTag)
        console.log(searchTagIndex)
        if(searchTagIndex > -1 ) {
            replaceSearchTags.splice(searchTagIndex, 1)
            this.setState(prevState => ({
                searchTags: replaceSearchTags
            }));
            this.exploreMusic()
        }
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
                            <Input className="tag-input mb-3" onKeyPress={this.searchTagInputHandle} placeholder="Artist, activity, genre or mood" bsSize="lg" />
                        </Col>
                        {this.state.searchTags.map((searchTag, index) => (
                            <Col lg="auto animated fadeInLeft mb-3" key={index}>
                                <div className="search-tag on-top">
                                    <span className="text-white">#{searchTag}</span>
                                    <div className="close-tag-btn animated fadeIn" onClick={this.removeSearchTag(searchTag)}>
                                        <FaClose/>
                                    </div>
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
                            !this.state.searchTags.includes(commonTag) && (
                                <Col lg="auto" key={index} className="mb-3 animated fadeInUp">
                                    <div className="common-tag" onClick={this.addCommonTags(commonTag)}>
                                        {commonTag}
                                    </div>
                                </Col>
                                )
                            )
                        )}
                    </Row>


                    <Row className="text-center mt-5 mb-3 explore-img-group on-top">
                        <Col lg="3">
                            <div className="explore-img">
                            </div>
                        </Col>
                    </Row>



                </Container>
            </div>
        )
    }
}