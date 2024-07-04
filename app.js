const axios = require("axios")

// V&A gets a single record 
// axios.get("https://api.vam.ac.uk/v2/museumobject/O828146").then(function(result){
// const details = result.data["record"]
// console.log(details)
// })

// V&A getting multiple object records with images and details of display and location for matching SOME WORDS whether that be place, name, location etc 
axios.get('https://api.vam.ac.uk/v2/objects/search?q="England"').then(function(result){
    console.log(result.data.records[0])
})



