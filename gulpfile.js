var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

gulp.task('default', defaultTask);

function defaultTask(done){
    console.log('lol!');
    done();
}

gulp.task('minify-css', function(done){
    return gulp.src('./src/style/css/*.css')
    .pipe(cleanCss({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/style/css'))
    done();

});

gulp.task('minify-js', function(done){
    return gulp.src('./src/scripts/*')

    .pipe(gulp.dest('dist/scripts'))
    done();

});

gulp.task('htmlmin', function(done){
    return gulp.src('./src/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
    done();
});

gulp.task('tinypng', function (done) {
    gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'L9Wzm1H9Mn8zyPQRFwsLST59HT20pHNm'
        }))
        .pipe(gulp.dest('dist/img'));
        done();
});

// L9Wzm1H9Mn8zyPQRFwsLST59HT20pHNm