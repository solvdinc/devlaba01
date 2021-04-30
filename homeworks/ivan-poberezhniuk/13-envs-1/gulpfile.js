const { src, dest, watch, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const replace = require('gulp-replace');

const files = {
  scssPath: 'src/scss/**/*.scss',
};

function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'));
}

function watchTask() {
  watch([files.scssPath], { interval: 1000, usePolling: true }, series(parallel(scssTask)));
}

const watchTask1 = series(parallel(scssTask), watchTask);
const buildTask = series(scssTask);

exports.watch = watchTask1;
exports.build = buildTask;
