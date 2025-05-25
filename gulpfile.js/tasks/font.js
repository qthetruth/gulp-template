const { src, dest } = require('gulp');

const newer = require("gulp-newer"),
      fonter = require("gulp-fonter"),
      ttf2woff2 = require("gulp-ttf2woff2"),
      fontfacegen = require("gulp-fontfacegen");

const path = require("../config/path.js")
const app = require("../config/app.js");

const font = () => {
    return src(path.font.src)
        .pipe(newer(path.font.dest))
        .pipe(fonter(app.fonter))
        .pipe(dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(dest(path.font.dest))
        .pipe(fontfacegen(app.fontfacegen))
}

module.exports = font;