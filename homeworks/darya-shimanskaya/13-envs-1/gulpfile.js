const {
  src, dest, watch, task, series, parallel,
} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
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
    port: '3000',
  });

  watch(['./*.html', './*.scss'], series('html', 'sass')).on('change', browserSync.reload);
});

task('sass', () => src('./*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(dest('./dist'))
  .pipe(rename('[name].css'))
  .pipe(browserSync.stream()));

task('build', series('clean', parallel('html', 'sass')));

task('start', series('build', 'serve'));
