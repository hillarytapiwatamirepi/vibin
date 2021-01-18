require("dotenv").config();
const express = require("express");
const { getLyrics, getSong ,searchSong} = require('genius-lyrics-api');
const getSongById = require("genius-lyrics-api/lib/getSongById");
var router =express.Router();

router.get("/getLyrics/:title/:artist",(req,res)=>{
    // console.log(req)
    var title = req.params.title;
    var artist = req.params.artist;
    const options = {
        apiKey: process.env.CLIENT_ACCESS_TOKEN,
        title: title,
        artist: artist,
        optimizeQuery: true
        
    };
    getLyrics(options).then((lyrics)=>{
            res.send(lyrics);
    }).catch((err)=>{
        console.log("this is my err",err)
         res.send(err)
    });

})

router.get("/getSong/:title/:artist",(req,res)=>{
    // console.log(req)
    var title = req.params.title;
    var artist = req.params.artist;

    const options = {
        apiKey: process.env.CLIENT_ACCESS_TOKEN,
        title: title,
        artist: artist,
        optimizeQuery: true
        
    };
    getSong(options).then((data)=>{
            res.send(data);
    }).catch((err)=>{
 
        res.send(err)
    });

})

router.get("/searchSong/:title/:artist",(req,res)=>{
    // console.log(req)
    var title = req.params.title;
    var artist = req.params.artist;
    const options = {
        apiKey: process.env.CLIENT_ACCESS_TOKEN,
        title: title,
        artist: artist,
        optimizeQuery: true
        
    };
    searchSong(options).then((data)=>{
            res.send(data);
    }).catch((err)=>{
 
        res.send(err)
    });

})

router.get("/getSongById/:id",(req,res)=>{
    var id = req.params.id;
    getSongById(id,process.env.CLIENT_ACCESS_TOKEN).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err)
    });

})





module.exports = router