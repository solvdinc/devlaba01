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

const distDir = './dist';
const srcDir = './src';
const distAssetsDir = `${distDir}/assets`;
const srcAssetsDir = `${srcDir}/assets`;

task('clean',  () => {
  return src(distDir, {
      allowEmpty: true,
    })
    .pipe(clean());
});

task('images', function () {
  return src(srcAssetsDir + '/*.jpg')
    .pipe(image())
    .pipe(dest(distAssetsDir));
});

task('buildHtml', function () {
  return src(srcDir + '/cv.html')
    .pipe(dest('./dist'));
});

task('buildCss', function () {
  return src(srcDir + '/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(distDir + '/css'));
});

task('serve', function () {
  browserSync.init({
    port: 1234,
    server: {
      baseDir: distDir,
      directory: true,
    }
  });
});

task('monitor', function () {
  watch(srcDir +'/sass/*.*', series('buildCss'));
});

task('build', series('clean', parallel('images', 'buildHtml', 'buildCss')));

task('dev', series('build', parallel('serve', 'monitor')));