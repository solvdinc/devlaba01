const { src, dest, series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const browsersync = require("browser-sync");
const cleanCSS = require('gulp-clean-css');

function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: './src'
    }    
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

function sassCopmpile() {
  return src("src/scss/**/*.scss")
  .pipe(sourcemaps.init())
  .pipe(sass().on("error", sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("src/css"))
  .pipe(
    browsersync.reload({
      stream: true,
    })
  );
}

function clean(){
  return src('src/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('src'));
}

function watchCopmpile(){
  watch('src/*.html', browsersyncReload);
  watch("src/scss/**/*.scss", series(sassCopmpile, browsersyncReload));
}

exports.build = series(
  clean
);

exports.start = series(
  browsersyncServe,
  watchCopmpile
);