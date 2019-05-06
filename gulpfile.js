var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('browserify',function(){
    return browserify('./src/app.js')
    .transform(babelify.configure({
        presets:["@babel/preset-env"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/'))
})

gulp.task('watch', function(){
    gulp.watch('./src/*.js', gulp.series('browserify'));
})