var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var es = require('event-stream');

gulp.task('scripts', function() {
    var javaScriptFromCoffeeScript = gulp.src('src/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log));
        
    var js = gulp.src('src/*.js');

    return es.merge(javaScriptFromCoffeeScript, js)
        .pipe(concat('all_1.0.0.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
   gulp.watch('src/*.{js, coffee}', ['scripts']); 
});