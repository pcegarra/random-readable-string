var fs = require('fs');

module.exports = function getSlug(totalWords, callback) {


    return new Promise((resolve, reject) => {

        fs.readFile(__dirname + '/assets/words_es.txt', 'utf8', (err, contents) => {
            let words = contents.split("\n");
            let maxWords = contents.split("\n").length;
            let slug = "";
            for (var i = 0; i < totalWords; i++) {
                slug += words[Math.floor(Math.random() * maxWords)].split(" ")[0];
                if (i < totalWords - 1) {
                    slug += "-";
                }
            }
            slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            resolve(slug.toLocaleLowerCase());

        });

    });


};