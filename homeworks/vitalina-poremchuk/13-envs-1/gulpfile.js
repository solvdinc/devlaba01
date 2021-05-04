const { src, dest, series} = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const browsersync = require("browser-sync");
const cleanCSS = require("gulp-clean-css");
const image = require('gulp-image');

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "./dist",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

function htmlCompile() {
  return src("./src/index.html").pipe(dest("dist"));
}

function imagesCompile() {
  return src("./src/image/*").pipe(image()).pipe(dest("dist"));
}

function sassCopmpile() {
  return src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
    .pipe(
      browsersync.reload({
        stream: true,
      })
    );
}

function clean() {
  return src("src/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist"));
}

function watchCopmpile() {
  watch("src/*.html", browsersyncReload);
  watch("src/scss/**/*.scss", series(sassCopmpile, browsersyncReload));
}

exports.build = series(clean, htmlCompile, imagesCompile, sassCopmpile);

exports.start = series(browsersyncServe, watchCopmpile);
