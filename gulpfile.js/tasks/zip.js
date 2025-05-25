const { src, dest } = require('gulp');
const gulpZip = require('gulp-zip');

const zip = () => {
    return src('dist/**')
        .pipe(gulpZip('public.zip'))
        .pipe(dest('public')) 
} 

module.exports = zip;