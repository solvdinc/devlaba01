const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const clean = require('gulp-clean');

exports.clean = () => src(['./styles'], { allowEmpty: true })
  .pipe(clean());

exports.build = () => src(['./styles.scss'])
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(dest('./styles'))
  .pipe(rename('styles.css'));

exports.start = () => watch(['./styles.scss'], (cb) => {
  console.log('File ./styles.scs was changed');
  cb();
});
