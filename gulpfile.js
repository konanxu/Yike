/**
 * Created by konan on 17/9/9.
 */

//引入gulp

var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var htmlminify = require('gulp-html-minify');
//定义任务
gulp.task('cssConfig',function () {
    // console.log('gulp study！！');
    return gulp.src('./public/sass/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(csso())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('htmlConfig',function () {
    return gulp.src('./index.html')
        .pipe(htmlminify())
        .pipe(gulp.dest('./release'));
})