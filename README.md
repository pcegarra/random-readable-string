# random-readable-slug
Do you want random human-readable slugs?

` npm i --save random-readable-slug`

Usage;
````javascript
var getSlug = require("random-readable-slug");

//english
getSlug(3).then(slug =>{
    console.log(slug);
    //output: safe-professor-nerve
});

//spanish
getSlug(4, "es").then(slug =>{
    console.log(slug);
    //output: escritores-programa-silaba-mayo
});


````
