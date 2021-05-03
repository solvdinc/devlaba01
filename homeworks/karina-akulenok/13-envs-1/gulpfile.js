const {
  src,
  dest,
  series,
  watch,
} = require('gulp');
const gulpClean = require('gulp-clean');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');

const paths = {
  newHtml: './src/*.html',
  styles: './src/styles/*.scss',
};

const clean = () => src(['./dist/'], { allowEmpty: true })
  .pipe(gulpClean());

const buildHtml = () => src(paths.newHtml)
  .pipe(rename('new.html'))
  .pipe(dest('./dist'));

const buildCss = (type = false) => src(paths.styles)
  .pipe(gulpSass({ outputStyle: type }))
  .pipe(dest('./dist/styles'));

const serve = () => {
  browserSync.init({
    port: 1234,
    reloadOnRestart: true,
    server: {
      baseDir: ['./dist'],
      directory: true,
    },
  });

  watch(paths.newHtml, series(buildHtml)).on('change', browserSync.reload);
  watch(paths.styles, series(buildCss)).on('change', browserSync.reload);
};

exports.build = series(
  buildHtml,
  buildCss.bind(null, 'compressed'),
);

exports.start = series(
  buildHtml,
  buildCss,
  serve,
);

exports.clean = clean;
