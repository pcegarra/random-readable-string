var fs = require('fs');

module.exports = function getSlug(totalWords, lang, callback) {

    let file = '/assets/words_en.txt';
    if (lang === "es") {
        file = '/assets/words_es.txt';
    }

    return new Promise((resolve, reject) => {

        fs.readFile(__dirname + file, 'utf8', (err, contents) => {
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