/**
 * Created by konan on 17/9/9.
 */

//引入gulp

var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');
var rev = require('gulp-rev');
var revcollector = require('gulp-rev-collector');
var autoprefix = require('gulp-autoprefixer');

var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');

//定义任务
gulp.task('cssConfig',function () {
    // console.log('gulp study！！');
    return gulp.src('./public/sass/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(csso())
        // .pipe(autoprefix())
        .pipe(rev())
        .pipe(gulp.dest('./release/public/css'))
        .pipe(rev.manifest())
        .on('error',function (err) {
            console.log(err +'111');
        })
        .pipe(gulp.dest('./release/public/rev'));
});

gulp.task('htmlConfig',function () {
    return gulp.src(['./index.html','./views/*.html'],{base :'./'})
        .pipe(htmlmin({collapseWhitespace: true,removeComments:true}))
        .pipe(gulp.dest('./release'));
});

gulp.task('rev',function () {
    return gulp.src(['./release/public/rev/*.json','./release/**/*.html'],{base:'./release'})
        .pipe(revcollector())
        .pipe(gulp.dest('./release'))
});


gulp.task('useref',function () {
    return gulp.src('./index.html')
        .pipe(useref())
        .pipe(gulpif('*.js',uglify()))
        .pipe(gulp.dest('./release/useref'));
})



