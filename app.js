const axios = require("axios")

// V&A gets a single record 
axios.get("https://api.vam.ac.uk/v2/museumobject/O828146").then(function(result){
const details = result.data["record"]
console.log(details)
})

