const notify = require('gulp-notify');

module.exports = {

    htmlmin: {
        collapseWhitespace: true,
    },

    cssmin: {
        suffix: ".min"
    },

    jsmin: {
        suffix: ".min"
    },

    fonter: {
        formats: ["ttf", "woff", "eot", "svg", "otf"]
    },

    fontfacegen: {
        filepath: "./src/assets/scss/vendor/",
        filename: "fonts.scss",
    },

    plumber: {
        errorHandler: notify.onError()
    },

}
