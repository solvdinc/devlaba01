const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const image = require('gulp-image');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const {
  src,
  task,
  dest,
  series,
  watch,
  parallel,
} = require('gulp');

task('clean', function () {
  return src('./dist', {
      allowEmpty: true
    })
    .pipe(clean())
})

task('images', function () {
  return src('./src/assets/*')
    .pipe(image())
    .pipe(dest('./dist/assets'));
});

task('buildHtml', function () {
  return src('./src/cv.html')
    .pipe(dest('./dist'));
})

task('buildCss', function () {
  return src('./src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./dist/css'));
});

task('serve', function () {
  browserSync.init({
    port: 1234,
    server: {
      baseDir: "./dist",
      directory: true
    }
  });
});

task('monitor', function () {
  watch('./src/sass/*.*', series('buildCss'));
})

task('build', series('clean', parallel('images', 'buildHtml', 'buildCss')));

task('dev', series('build', parallel('serve', 'monitor')));