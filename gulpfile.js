var gulp = require('gulp'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
clean = require('gulp-clean-css'),
print = require('gulp-print'),
order = require('gulp-order'),
ngAnnotate = require('gulp-ng-annotate'),
prefix = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist',
      online: true
    },
  })
})

gulp.task('html', function() {
    return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist/'))
    .on('end', browserSync.reload)
})

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(clean())
    .pipe(concat('min.css'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function() {
    return gulp.src('app/js/**/*.js')
    .pipe(order([
        '**/*.js'
    ]))
    .pipe(sourcemaps.init())
    .pipe(concat('min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('dist/js'))
    .on('end', browserSync.reload)
})

gulp.task('watch', ['browserSync', 'sass', 'html', 'js'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/**/*.html', ['html']);
    gulp.watch('app/js/**/*.js', ['js']);
})

gulp.task('default', ['watch']);
