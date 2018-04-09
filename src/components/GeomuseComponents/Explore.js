import React, { Component } from 'react'
import './geomuse-styles/explore.css'
import {Row, Col, Container, Label, Input } from 'reactstrap';
import FaClose from 'react-icons/lib/fa/close'
import axios from 'axios'
import FaPlay from 'react-icons/lib/fa/play'
import FaLibrary from 'react-icons/lib/fa/bars'


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
            searchTags: [],
            searchResults: [],
            headerBgImage1: '',
            headerBgImage2: '',
            headerBgImage3: '',
            headerBgImage4: '',
        }
    }

    searchTagInputHandle = (e) => {
        e.preventDefault
        if(e.key === 'Enter') {
            console.log(e.target.value)
            let inputTag = e.target.value
            if(!this.state.searchTags.includes(inputTag)) {
                this.setState({ searchTags: [...this.state.searchTags, inputTag] }, () => {
                    this.exploreMusic()
                });
            }
        }

    }

    addCommonTags = (commonTag) => (e) => {
        e.preventDefault
        if(!this.state.searchTags.includes(commonTag)) {
            console.log(commonTag)
            this.setState({ searchTags: [...this.state.searchTags, commonTag] }, () => {
                console.log(this.state.searchTags)
                this.exploreMusic()
            });
        }
    }

    exploreMusic = () => {
        let exploreTags = this.state.searchTags
        console.log(exploreTags.toString())
        axios.get("https://api.jamendo.com/v3.0/tracks/?client_id=0c736982&format=jsonpretty&limit=8&fuzzytags="+ exploreTags +"&speed=high+veryhigh&include=musicinfo&groupby=artist_id&order=popularity_week")
            .then(response => {
                console.log('Result data', response.data.results)
                this.setState({
                    searchResults: response.data.results,
                    headerBgImage1: response.data.results[0].image,
                    headerBgImage2: response.data.results[1].image,
                    headerBgImage3: response.data.results[2].image,
                    headerBgImage4: response.data.results[3].image
                });
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

    componentDidMount() {
        this.exploreMusic()
    }


    render() {
        return (
            <div className='explore-component'>
                <div className="component-header">
                    <div className="bg-segment-container">
                        <div className="bg-segment" style={{backgroundImage: 'url('+ this.state.headerBgImage1 +')'}}></div>
                        <div className="bg-segment" style={{backgroundImage: 'url('+ this.state.headerBgImage2 +')'}}></div>
                        <div className="bg-segment" style={{backgroundImage: 'url('+ this.state.headerBgImage3 +')'}}></div>
                        <div className="bg-segment" style={{backgroundImage: 'url('+ this.state.headerBgImage4 +')'}}></div>
                    </div>
                    <Container>
                        <Row className="text-center mt-5">
                            <Col>
                                <h4 className="text-white">Explore and Discover New Music</h4>
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
                    </Container>
                </div>


                <Container>
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

                    <Row className="mt-5 mb-3 explore-img-group on-top">
                        {this.state.searchResults.map((searchResult, index) => (
                            <Col lg="4" className="mb-3 animated fadeIn" key={index}>
                                <div className="explore-img" style={{backgroundImage: 'url('+ searchResult.image +')'}}>
                                    <div className="explore-shadow-gradient">
                                        <div className="play-container">
                                            <div className="play-button-container">
                                                <FaPlay width="40px" height="40px" className="text-white"/>
                                            </div>
                                            <div className="add-library-container">
                                                <FaLibrary className="text-white"/>
                                            </div>

                                            <div className="genres-container">
                                                <Row>
                                                    {searchResult.musicinfo.tags.genres.map((genreTag, index) => (
                                                        <Col lg="auto" key={index} className="mb-2">
                                                            <div className="genre-tag text-white">
                                                                {genreTag}
                                                            </div>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="result-text">
                                        <h5 className="mt-2 text-white">
                                            <strong>
                                                {searchResult.name}
                                            </strong>
                                        </h5>
                                        <p className="text-white">{searchResult.artist_name}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}

                    </Row>



                </Container>
            </div>
        )
    }
}