const { src, dest, series, parallel } = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const gulpClean = require('gulp-clean');
const ejs = require('gulp-ejs');

const clean = () => src(['./dist'], { allowEmpty: true })
  .pipe(gulpClean());

const buildHtml = () => src(['./index.ejs'])
  .pipe(ejs({
    title: 'My Project',
    body: 'test content',
  }))
  .pipe(rename('index.html'))
  .pipe(dest('./dist'));

const buildJs = () => src(['./index.js', './index-2.js'])
  .pipe(concat('scripts.js'))
  .pipe(dest('./dist'));

exports.build = series(
  clean,
  parallel(
    buildJs,
    buildHtml,
  ),
);

exports.default = (cb) => {
  console.log(1);
  cb();
};

exports.clean = clean;
