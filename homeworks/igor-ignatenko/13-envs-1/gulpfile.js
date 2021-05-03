const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const sync = require('browser-sync').create();

function scssTask() {
    return src(['./src/styles/sass/styles-scss.scss', './src/styles/sass/media.scss'], { sourcemaps: true })
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest(['./src/styles/css'], { sourcemaps: '.' }))
}

function browserSyncServer(cb) {
    sync.init({
        server: {
            baseDir: '.'
        }
    });
    cb()
}

function browserSyncReload(cb) {
    sync.reload()
    cb()
}

function watchTask() {
    watch(['./src/html/index.html'], browserSyncReload)
    watch(['./src/styles/sass/styles-scss.scss', , './src/styles/sass/media.scss'], series(scssTask, browserSyncReload))
}

exports.build = series(
    watchTask
)

exports.start = series(
    scssTask,
    browserSyncServer,
    watchTask
)