const { src, dest } = require('gulp');

const plumber = require('gulp-plumber'),
      babel = require('gulp-babel'),
      uglify = require('gulp-uglify');

const path = require("../config/path.js");
const app = require("../config/app.js");

const js = () => {
    return src(path.js.src)
        .pipe(plumber(app.plumber))
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename(app.jsmin))
        .pipe(dest(path.js.dest))
}

module.exports = js;