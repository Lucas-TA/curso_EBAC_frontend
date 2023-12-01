const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function minifyImage() {
    return gulp.src('./src/assets/*')
            .pipe(imageMin())
            .pipe(gulp.dest('./build/assets'))
}

function compileSass() {
    return gulp.src('./src/styles/main.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./build/styles'))
}
function uglifyJs() {
    return gulp.src('./src/scripts/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./src/assets/*', {ignoreInitial: false}, gulp.series(minifyImage));
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(uglifyJs))
}