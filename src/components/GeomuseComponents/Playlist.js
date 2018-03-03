import React, { Component } from 'react';
import axios from 'axios'

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {

            updateSearchQuery: (evt) => {
                let searchQuery = evt.target.value
                this.state.musicSearch(searchQuery)
            },

            musicSearch: (searchQuery) => {
                axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q="+searchQuery+"&type=video&videoDefinition=high&key=AIzaSyCAUtLwwTiZHRsO4brpMT12q0pyKMp9hNs")
                    .then(response => {
                        console.log(response.data.items)
                        this.setState({
                            renderRenderQuery: response.data.items
                        })
                    })
                    .catch(error => {
                        console.log('Error fetching and parsing data', error);
                    });
            },

            renderRenderQuery: []

            // renderRenderQuery: (renderData) => {
            //     renderData.map(function (renderObject, index) {
            //         console.log(renderObject.thumbnails.default)
            //         return (
            //         <div>
            //             <img src={renderObject.thumbnails.default}/>
            //         </div>
            //         )
            //     })
            // }
        }

    }


    render() {
        return (
            <div>
                <h2>Testing Life</h2>
                <input type="text" onChange={this.state.updateSearchQuery}/>
                {/*<button onClick={this.videoSearch}>Test Button</button>*/}
                {this.state.renderRenderQuery.map(function (renderObject, index) {
                    return (
                        <img src={renderObject.snippet.thumbnails.default.url}  className="animated fadeIn"/>
                    )
                })}
            </div>
        );
    }
}

export default Playlist;
