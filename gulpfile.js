var gulp       = require('gulp');
var coffee     = require('gulp-coffee');
var scss       = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var react      = require('gulp-react');
var browserify = require('browserify');
var reactify   = require('reactify');
var source     = require('vinyl-source-stream');
var shim       = require('browserify-shim');

var paths = {
   coffee: './assets/coffee/*.coffee',
   components: './views/app.jsx',
   scss: './assets/scss/*.scss'
}

gulp.task('coffee', function() {
   gulp.src(paths.coffee)
      .pipe(coffee())
      .pipe(gulp.dest('./public/js/'));
});

gulp.task('components', function() {
   browserify({
         entries: [paths.components],
         debug: true,
      })
      .require('./views/app.jsx', {expose: 'wtc'})
      .transform(reactify)
      .external('react')
      .transform(shim)
      .bundle()
      .pipe(source('components.js'))
      .pipe(gulp.dest('./public/js/'));
});

gulp.task('scss', function() {
   gulp.src(paths.scss)
      .pipe(scss())
      .pipe(autoprefix())
      .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
   gulp.watch(paths.coffee, ['coffee']);
   gulp.watch(paths.components, ['components']);
   gulp.watch(paths.scss, ['scss']);
});

gulp.task('default', ['coffee', 'scss', 'components']);
