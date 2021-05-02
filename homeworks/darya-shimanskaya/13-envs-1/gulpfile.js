const {
  src, dest, watch, task, series,
} = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const browserSync = require('browser-sync');

task('clean', () => src(['./dist'], { allowEmpty: true })
  .pipe(clean()));

task('html', () => src(['./*.html'])
  .pipe(dest('./dist'))
  .pipe(browserSync.stream()));

task('serve', () => {
  browserSync.init({
    server: {
      baseDir: ['./dist'],
    },
  });

  watch(['./dist/index.html', './dist/styles.css']).on('change', browserSync.reload);
});

task('sass', () => src('./*.scss')
  .pipe(sass())
  .pipe(dest('./dist'))
  .pipe(rename('styles.css'))
  .pipe(browserSync.stream()));

task('build', series('clean', 'html', 'sass'));

task('start', series('build', 'serve'));
