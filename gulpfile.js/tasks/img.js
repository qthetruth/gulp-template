const { src, dest } = require('gulp');

const imageMin = require('gulp-imagemin'); 
const newer = require('gulp-newer');

const path = require("../config/path.js")

const img = () => {
    return src(path.img.src)
        .pipe(newer(path.img.dest))
        .pipe(imageMin({
            verbose: true
        }))
        .pipe(dest(path.img.dest))
}

module.exports = img;