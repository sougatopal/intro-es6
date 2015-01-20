var gulp = require('gulp');
var traceur = require('gulp-traceur');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
gulp.task('clean-dist', function () {
  return gulp.src('dist/**/*.*', {read: false})
    .pipe(clean());
});
gulp.task('clientside', function () {
    return gulp.src([
    	'src/**/*.js','!src/**/*-spec/**/*.*',
    	traceur.RUNTIME_PATH])
        .pipe(sourcemaps.init())
        .pipe(traceur({
        	"modules":"amd"
        }))
       .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'));
});
gulp.task('serverside', function () {
    return gulp.src([
    	'src/**/*.js','!src/**/*-spec/**/*.*',
    	traceur.RUNTIME_PATH])
        .pipe(sourcemaps.init())
        .pipe(traceur({
        	"modules":"commonjs"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/server/'));
});
gulp.task('default',['clean-dist','clientside','serverside']);