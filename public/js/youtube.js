
/**
 * list of videoarrays, queued, sort of like the current playlist
 */
var videoIDs = [] ;


/**
 * 
 * starts frame in the browser
 * 
 */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);




// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'mpSATGpwyMM',
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}




/**
 * Given a videoID, functions loads the video for play
 * @params videoID
 *
 */
function loadVideo(videoID) {

    
}

/**
 *
 * Given a videoID, function places video in a sequence or queue
 * @params videoID
 */

function cueVideoByID(videoID) {}

/**
 * Given a YouTube url, cues a video for play
 * @params url
 */
function cueVideoByUrL(url) {
    player.cueVideoByUrl(url,
        0)
}


/**
 * Given a YouTube url, plays a video for play
 * @params url
 */
function loadVideoByUrl(url) {

     player.loadVideoByUrl()

}


/**
 * 
 * Given an array of YouTube
 * 
 */


/**
 *
 * plays video that is currently queued
 *
 */
function playVideo() {

}

/**
 * pauses vide that is currently queued
 */
function pauseVideo() {}

/**
 *
 * stops the video that is currently queued
 */
function stopVideo() {}

/**
 * gets the time that has elapsed in the video
 */
function getCurrentVideoTime() {}
/**
 *
 * gets the duration of the video
 */
function getVideoDuration() {}
/**
 *
 * gets the url of the currently playing video
 */
function getVideoUrl() {}

/**
 * gets the video of the embedded code
 */
function getVideoEmbedCode() {}

/**
 *
 * mutes the current loaded video
 */
function muteVideo() {}

/**
 *
 * unmute the current loaded video
 *
 */
function unmuteVideo() {}

/**
 *
 * sets the volume of the current loaded video
 *
 */
function setVolume() {}

/**
 * gets the current volume of the current loaded video
 */
function getVolume() {}



/**
 * 
 * queues the video onto the current play, 
 * @params url - url of the video
 */
function queVideoOnPlayList(){
  
   var urlInput = document.getElementById("url-input");
   let url = urlInput.value;
   let urlRegex = new RegExp(/[https://www.youtube.com/watch?v=][a-zA-Z0-9]{9}/);
   var isURLValid = urlRegex.test(url);
   if (isURLValid){
    let urlSplit = url.split("=");
    let id =  urlSplit[urlSplit.length-1];
    let idRegex = new RegExp(/[a-zA-Z0-9]{9}/);
    var isIDValid = idRegex.test(id);
    if (isIDValid){
        videoIDs.push(id);
        var videoTemplate = document.createElement("h1");
        videoTemplate.innerText = id;
        var videosDOM  = document.getElementById("videos");
        videosDOM.appendChild(videoTemplate);
        
    }
   }

}




/**
 * 
 * removes a url from playlist, at a valid index 
 * 
 */
function removeFromPlaylist(index){
    if (0<=index &&index<videoIDs.length){
           videoIDs.splice(index,1);
    }
}




/**
 * In a playlist, plays the next video
 */
function playNextVideo(){


}
/**
 * 
 * 
 */
function playPreviousVideo(){}

/**
 * In a playlist, plays video at index {i}
 * @params i - index of the list
 * 
 */
function playVideoAt(i){

}