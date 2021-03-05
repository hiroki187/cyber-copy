const gulp = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const sass = require("gulp-sass");
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const sassGlob = require("gulp-sass-glob");
const pngquant = require('imagemin-pngquant');
// const changed = require('gulp-changed');

gulp.task("sass", function (done) {
    gulp.src("./scss/style.scss")
    .pipe(sassGlob())
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(gulp.dest("./css/"));
    done();
});

gulp.task('sass-watch', function() {
    gulp.watch('./scss/**/*.scss', gulp.task('sass'));
});


gulp.task('imagemin', function (done) {
    gulp.src('./images/*.{jpg,jpeg,png,gif,svg}')
    .pipe(imagemin(
      [
        pngquant({ quality: [0.5,0.8], speed: 1 }),
        mozjpeg({ quality: 80 }),
        imagemin.svgo(),
        imagemin.gifsicle()
      ]
    ))
    .pipe(gulp.dest('./images/min-images'));
    done();
});


// CSS圧縮

gulp.task("min-css", function(done) {
    gulp.src('./css/*.css')
    .pipe(cleanCSS())
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(gulp.dest('./css/min-css'));
    done();
});