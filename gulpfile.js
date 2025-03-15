const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

exports.images = comprimeImagens;
exports.javascripts = comprimeJavaScript;