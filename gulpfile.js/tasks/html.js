const { src, dest } = require('gulp');

const plumber = require('gulp-plumber'),
      htmlmin = require('gulp-htmlmin'),
      fileInclude = require('gulp-file-include'),
      removeHtmlComments = require('gulp-remove-html-comments'),
      panini = require('panini');

const path = require("../config/path.js");
const app = require("../config/app.js");
const { pathSrc } = require('../config/path.js');

const html = () => {
    panini.refresh()
    return src(path.html.src)
        .pipe(plumber(app.plumber))
        .pipe(fileInclude())
        .pipe(panini({
            root: pathSrc,
            layouts: `${pathSrc}/html/templates/layouts/`,
            partials: `${pathSrc}/html/templates/partials/`,
            data: `${pathSrc}/html/templates/data/`
          }))
        .pipe(htmlmin(app.htmlmin))
        .pipe(removeHtmlComments())
        .pipe(dest(path.html.dest))
}

module.exports = html;