const {
  src,
  dest,
  series,
  parallel,
  watch,
} = require('gulp');
const gulpClean = require('gulp-clean');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const pngquant = require('imagemin-pngquant');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');

const distPath = path.resolve(__dirname, './dist/');
const paths = {
  newHtml: './src/*.html',
  styles: './src/styles/*.scss',
  images: './src/img/**/*.{jpg,jpeg,png,gif,svg}',
};

const clean = () => src(distPath, { allowEmpty: true })
  .pipe(gulpClean());

const buildHtml = () => src(paths.newHtml)
  .pipe(rename('new.html'))
  .pipe(dest(path.resolve(distPath)));

const buildCss = (type = false) => src(paths.styles)
  .pipe(sourcemaps.init())
  .pipe(gulpSass({ outputStyle: type }))
  .pipe(sourcemaps.write())
  .pipe(dest(path.resolve(distPath, 'styles')));

const getImages = () => src(paths.images)
  .pipe(changed(distPath))
  .pipe(cache(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    une: [pngquant()],
  })))
  .pipe(dest(path.resolve(distPath, 'img')));

const serve = () => {
  browserSync.init({
    port: process.env.PORT || 3000,
    reloadOnRestart: true,
    server: {
      baseDir: [distPath],
      directory: true,
    },
  });

  watch(paths.newHtml, series(buildHtml)).on('change', browserSync.reload);
  watch(paths.styles, series(buildCss)).on('change', browserSync.reload);
  watch(paths.images, series(getImages)).on('change', browserSync.reload);
};

exports.build = parallel(
  buildHtml,
  buildCss.bind(null, 'compressed'),
  getImages,
);

exports.start = parallel(
  buildHtml,
  buildCss,
  getImages,
  serve,
);

exports.clean = clean;
