const { src, dest } = require('gulp');

const plumber = require('gulp-plumber'),
      notify = require('gulp-notify'),
      cssimport = require('gulp-cssimport'),
      autoprefixer = require('gulp-autoprefixer'),
      csso = require('gulp-csso'),
      rename = require('gulp-rename'),
      groupCssMedia = require('gulp-group-css-media-queries');

const path = require("../config/path.js");
const app = require("../config/app.js");

const css = () => {
    return src(path.css.src)
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(autoprefixer())
        .pipe(groupCssMedia())
        .pipe(dest(path.css.dest))
        .pipe(cssimport())
        .pipe(rename(app.cssmin))
        .pipe(csso())
        .pipe(dest(path.css.dest))
}

module.exports = css;