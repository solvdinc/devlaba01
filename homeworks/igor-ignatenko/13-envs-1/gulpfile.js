const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const sync = require('browser-sync').create();
const gulpClean = require('gulp-clean')


const path = {
    dist: './dist/',
    styles: './src/styles',
    html: './src/html',
    images: './src/images'
}

function buildHtml() {
    return src(path.html + '/*.html',)
        .pipe(dest(path.dist + '/html'))
}

function buildCss(type = false, ) {
    return src(path.styles + '/*.scss')
        .pipe(sass({ outputStyle: type }))
        .pipe(dest(path.dist + '/styles'))
}
function buildSourcemaps() {
    return src(path.styles + '/*.scss', { sourcemaps: true })
    .pipe(dest(path.dist + '/styles', { sourcemaps: '.' }))
}

function images() {
    return src(path.images + '/*')
        .pipe(dest(path.dist + '/images'))
}

function clean() {
    return src((path.dist), { allowEmpty: true })
        .pipe(gulpClean())
}

function browserSyncServer() {
    sync.init({
        port: 3000,
        reloadOnRestart: true,
        server: {
            baseDir: path.dist,
            directory: true
        }
    });
    watch(path.html + '/*.html', series(buildHtml)).on('change', sync.reload)
    watch(path.styles + '/*.scss', series(buildCss)).on('change', sync.reload)
    watch(path.images + '/*', series(images)).on('change', sync.reload)
}

exports.build = series(
    clean,
    buildHtml,
    buildCss.bind(null, 'compressed'),
    images
)

exports.start = series(
    clean,
    buildHtml,
    buildCss,
    buildSourcemaps,
    images,
    browserSyncServer
)