const { src, dest, watch, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const del = require('del');

const files = {
  scssPath: 'src/scss/**/*.scss',
  htmlPath: 'src/*.html',
  cssPath: 'src/css',
  dist: 'dist/',
};

const browserSync = (done) => {
  browsersync.init({
    server: {
      baseDir: './src',
    },
    port: 3000,
  });
  done();
};

const browserSyncReload = (done) => {
  browsersync.reload();
  done();
};

const scssTask = () =>
  src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(files.cssPath));

const cssTask = () =>
  src(`${files.cssPath}/**.css`)
    .pipe(postcss([cssnano()]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(files.dist));

const htmlTask = () => src(files.htmlPath).pipe(dest(files.dist));

const watchTask = () =>
  watch(
    [files.scssPath, files.htmlPath],
    { interval: 1000, usePolling: true },
    series(scssTask, browserSyncReload)
  );

const cleanDistTask = () => del(files.dist);

const buildTask = series(cleanDistTask, scssTask, parallel(cssTask, htmlTask));
const watchSync = parallel(watchTask, browserSync);

exports.watch = watchSync;
exports.build = buildTask;
exports.clean = cleanDistTask;
