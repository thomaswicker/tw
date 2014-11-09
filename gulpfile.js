var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    minifyHTML = require('gulp-minify-html'),
    cp = require('child_process');

//Source variables
var sassSources = ['components/sass/application.scss'];
var jsSources = ['components/js/*.js'];
var htmlSources = ['_site/**/*.html'];

gulp.task('styles', function() {
  return gulp.src(sassSources)
    .pipe(plumber())
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('html', function() {
  var opts = {comments:false, spare:false, quotes: false, empty: false};

  return gulp.src(htmlSources)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('_site/'))
    .pipe(notify({ message: 'HTML minification complete' }));
});

gulp.task('scripts', function() {
  return gulp.src(jsSources)
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(concat('application.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(gulp.dest('_site/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('clean', function() {
  return gulp.src(['stylesheets', 'javascripts'], {read: false})
    .pipe(clean());
});


//Build the Jekyll Site
gulp.task('jekyll-build', ['html'], function (done) {
    browserSync.notify('Building Jekyll');
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

//Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['jekyll-build', 'html'], function () {
    browserSync.reload();
});

//Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync.init(null, {
        server: {
            baseDir: '_site'
        },
        host: "localhost"
    });
});

gulp.task('watch', function() {
  // Watch .sass files
  gulp.watch('components/sass/**/*.scss', ['styles']);
  // Watch .js files
  gulp.watch(jsSources, ['scripts']);
  // Watch html files
  gulp.watch(['index.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);

});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'browser-sync', 'html', 'watch');
});