const { src, dest, series, watch } = require('gulp');
const gulpClean = require('gulp-clean');
const gulpSass = require('gulp-sass');
const sync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

const paths = {
  build: './dist',
  styles: './src/styles',
  html: './src/views',
  img: './src/img'
}

function buildHtml() {
  return src(paths.html + '/*.html')
    .pipe(dest('./dist/views'));
};

function clean() {
  return src((paths.build), { allowEmpty: true })
  .pipe(gulpClean());
};

function buildCss(type = false) {
  return src(paths.styles + '/*.scss')
    .pipe(gulpSass({outputStyle: type}))
    .pipe(dest('./dist/styles'));
};

function img() {
  return src(paths.img + '/*')
      .pipe(imagemin({
          interlaced: false,
          progressive: false,
          optimizationLevel: 3,
          svgoPlugins: [
              { removeViewBox: false }
          ]
      }))
      .pipe(dest(paths.build + '/img'))
};

function serve() {
  sync.init({
      port: 3000,
      reloadOnRestart: true,
      server: {
          baseDir: paths.build,
          directory: true
      }
  });

  watch(paths.html + '/*.html', series(buildHtml)).on('change', sync.reload)
  watch(paths.styles + '/*.scss', series(buildCss)).on('change', sync.reload)
  watch(paths.img + '/*', series(img)).on('change', sync.reload)
};


exports.build = series(
  clean,
  buildHtml,
  buildCss.bind(null, 'compressed'),
  img,
);


exports.dev = series(
  clean, 
  buildHtml,
  buildCss, 
  img, 
  serve
);