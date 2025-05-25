
const pathSrc = `./src`;
const pathDest = `./dist/public`;

module.exports = {
    pathSrc: pathSrc,
    root: pathDest,
    fontD: `${pathSrc}/assets/scss/vendor/fonts.scss`,

    html: {
        src: `${pathSrc}/html/*.html`,
        watch: `${pathSrc}/html/**/*.html`,
        dest: pathDest,
    },

    css: {
        src: `${pathSrc}/assets/css/*.css`,
        watch: `${pathSrc}/assets/css/**/*.css`,
        dest: `${pathDest}/assets/css`,
    },

    scss: {
        src: `${pathSrc}/assets/scss/*.scss`,
        watch: `${pathSrc}/assets/scss/**/*.scss`,
        dest: `${pathDest}/assets/css`,
    },

    js: {
        src: `${pathSrc}/assets/js/*.js`,
        watch: `${pathSrc}/assets/js/**/*.js`,
        dest: `${pathDest}/assets/js`,
    },

    img: {
        src: `${pathSrc}/assets/img/**/*.{jpg,jpeg,png,svg,ico,gif}`,
        watch: `${pathSrc}/assets/img/**/*.*`,
        dest: `${pathDest}/assets/img`
    },

    font: {
        src: `${pathSrc}/assets/font/*.*`,
        watch: `${pathSrc}/assets/font/**/*.*`,
        dest: `${pathDest}/assets/font`,
    },

    json: {
        src: `${pathSrc}/html/templates/data/**/*.*`,
        watch: `${pathSrc}/html/templates/data/**/*.*`,
    }

}
