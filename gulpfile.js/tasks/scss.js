const { src, dest } = require('gulp');

const plumber = require('gulp-plumber'),
      autoprefixer = require('gulp-autoprefixer'),
      csso = require('gulp-csso'),
      rename = require('gulp-rename'),
      groupCssMedia = require('gulp-group-css-media-queries'),
      sass = require('gulp-sass')(require('sass'));

const path = require("../config/path.js");
const app = require("../config/app.js");

const scss = () => {
    return src(path.scss.src)
        .pipe(plumber(app.plumber))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(groupCssMedia())
        .pipe(dest(path.scss.dest))
        .pipe(rename({
            extname: ".css",
            suffix: ".min"
        }))
        .pipe(csso())
        .pipe(dest(path.scss.dest))
}

module.exports = scss;