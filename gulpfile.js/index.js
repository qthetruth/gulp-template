const { watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

const path = require("./config/path.js");

const html = require('./tasks/html.js'),
      clear = require('./tasks/clear.js'),
      scss = require('./tasks/scss.js'),
      js = require('./tasks/js.js'),
      img = require('./tasks/img.js'),
      font = require('./tasks/font.js'),
      zip = require('./tasks/zip.js');


const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.json.watch, html).on("all", browserSync.reload);
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
}

const build = series(
    clear, parallel(html, js, img, series(font, scss))
);

const start = series(
    parallel(watcher, server)
);

exports.zip = zip;
exports.build = build;
exports.start = start;