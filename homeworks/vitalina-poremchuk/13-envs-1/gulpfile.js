const { src, dest, series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const browsersync = require("browser-sync");
const image = require("gulp-image");
const gulpClean = require("gulp-clean");

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

function cleanDist() {
  return src("./dist", { allowEmpty: true }).pipe(gulpClean());
}

function watchCopmpile() {
  watch("src/*.html", browsersyncReload);
  watch("src/scss/**/*.scss", series(sassCopmpile, browsersyncReload));
  watch("src/image/*.jpg", series(image)).on("change", sync.reload);
}

exports.build = series(cleanDist, htmlCompile, imagesCompile, sassCopmpile);

exports.start = series(browsersyncServe, watchCopmpile);
