import React, { Component } from 'react';
import axios from 'axios'
import './geomuse-styles/playlist.css'

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
            <div className="playlist-component">
                <h2>Testing Life</h2>
                <input type="text" onChange={this.state.updateSearchQuery}/>
                {/*<button onClick={this.videoSearch}>Test Button</button>*/}
                {this.state.renderRenderQuery.map(function (renderObject, index) {
                    let audioSrc = "https://www.yt-download.org/@api/button/mp3/" + renderObject.id.videoId
                    return (
                    <div key={index}>
                        <img src={renderObject.snippet.thumbnails.default.url}  key={index} className="animated fadeIn"/>
                        <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + renderObject.id.videoId} frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
                    </div>

                    )
                })}

                <div class="container">
                    <div class="display hidden">
                        <iframe id="video" src="//www.youtube.com/embed/LdQjndOvNn4?controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;html5=1" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                    </div>
                    <footer class="footer">
                        <div class="bar">
                            <div id="progressBar">
                                <div></div>
                            </div>
                        </div>
                        <div class="controls">
                            <button class="icon-fast-backward"></button>
                            <button class="icon-play" id="play"></button>
                            <button class="icon-pause" id="pause"></button>
                            <button class="icon-fast-forward"></button>
                        </div>
                    </footer>
                </div>

            </div>


        );
    }
}


var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    var playButton = document.getElementById("play"),
        pauseButton = document.getElementById("pause");

    playButton.addEventListener("click", function() {
        player.playVideo();
    });

    pauseButton.addEventListener("click", function() {
        player.pauseVideo();
    });
}

function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({
        width: progressBarWidth
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        var playerTotalTime = player.getDuration();
        var mytimer = setInterval(function() {
            var playerCurrentTime = player.getCurrentTime();
            var playerTimeDifference = (playerCurrentTime / playerTotalTime) * 100;
            console.log(playerCurrentTime);
            progress(playerTimeDifference, $('#progressBar'));
        }, 1000);
    } else {
        clearTimeout(mytimer);
    }
}



var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

export default Playlist;
