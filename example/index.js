var getSlug = require("../index.js");

//english by default
getSlug(3).then(slug =>{
    console.log(slug);
});

//spanish
getSlug(4,"es").then(slug =>{
    console.log(slug);
});