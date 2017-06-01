var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('Ride', function() {
    console.log("Jade 300km/h!");
});

gulp.task('jshint', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('sass', function() {
    return gulp.src('scss/*.scss/')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('*.js', ['jshint']);
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('*/*/*.scss', ['sass']);
    gulp.watch('*/*/*.scss', ['sass']);
});
