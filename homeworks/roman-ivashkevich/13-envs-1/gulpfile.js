const { src, dest, series, parallel, task, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const minifyCss = require('gulp-clean-css');

const srcFolder = './src/';
const distFolder = './dist/';
const srcAssets = `${srcFolder}assets/`;
const distAssets = `${distFolder}assets/`;

task('clear', () => del([distFolder]));

task('html', () =>
  src([`${srcFolder}**/*.html`])
    .pipe(dest(distFolder))
    .pipe(browserSync.stream()),
);

task('sass', () =>
  src([`${srcFolder}**/*.scss`])
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(dest(`${distFolder}`))
    .pipe(browserSync.stream()),
);

task('images', () =>
  src(`${srcAssets}img/**/*.+(png|jpg|jpeg|gif|svg|ico)`)
    .pipe(plumber())
    .pipe(dest(`${distAssets}img`)),
);

task('js', () =>
  src(`${srcFolder}**/*.js`)
    .pipe(plumber())
    .pipe(dest(distFolder))
    .pipe(browserSync.stream()),
);

task('serve', () =>
  browserSync.init({
    server: {
      baseDir: ['dist'],
    },
    port: 8000,
    open: false,
  }),
);

task('watch', () => {
  const watchItem = [
    `${srcFolder}**/*.html`,
    `${srcFolder}**/*.scss`,
    `${srcFolder}**/*.js`,
  ];

  watch(watchItem, series('dev')).on('change', browserSync.reload);
});

task('build', series('clear', 'html', 'sass', 'js', 'images'));

task('dev', series('build', parallel('serve', 'watch')));
