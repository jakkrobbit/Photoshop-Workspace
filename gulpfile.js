var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync({
        "proxy": "http://psshortcuts:8080/",
        "files": ["*.php", "*.html", "*.js", "css/*.css", "scripts/*.js"],
        "open": false
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});


gulp.task('styles', function () {
    gulp.src(['css/**/*.scss'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('default', ['browser-sync'], function () {
    gulp.watch("css/**/*.scss", ['styles']);
    gulp.watch("*.html", ['bs-reload']);
});
