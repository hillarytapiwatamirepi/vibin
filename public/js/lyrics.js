

function searchSong(){
    const titleField  = document.getElementById("title");
    const artistField = document.getElementById("artist");
    fetch(`/api/getSong/${titleField.value}/${artistField.value}`).then(response=>
        response.json()
    ).then(data=>{
        const songImage = document.getElementById("song-image");
        songImage.style = `background-image: url(${data.albumArt});width:300px;height:300px;background-size:100%`
        const songLyrics = document.getElementById("song-lyrics");
        songLyrics.innerText = data.lyrics
    }).catch((err)=>{console.log(err)})

}

