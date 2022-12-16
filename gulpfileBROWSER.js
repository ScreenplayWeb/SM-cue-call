//To use...
//1. npm install gulp
//2. gulp serve  - or, NAMEOFTASK
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');


//REFRESH ON HTML save
//nnpm install browser-sync gulp --save-dev
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
// Save a reference to the `reload` method


gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on("change", reload);
});




//gulp.task('task-name-here', function(){
	//task to run
	//   cli    gulp task-name-here
//});


gulp.task('minify-css', function(){
	return gulp.src('src/styles/global.css').pipe(cleanCSS()).pipe(gulp.dest('build/styles'));
});


gulp.task('joinerup', function(){
	return gulp.src('src/styles/*.css').pipe(concatCss('styles.css')).pipe(cleanCSS()).pipe(gulp.dest('build/styles'));
});

gulp.task('sassit', function(){
	return gulp.src('src/styles/*.sass').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('src/styles'));
});

gulp.task('styles', gulp.series('sassit', 'joinerup'));



gulp.task('imagemin', function(){
	gulp.src('src/images/*').pipe(imagemin()).pipe(gulp.dest('build/images'));
});


gulp.task('watch', function(){
	gulp.watch('src/styles/*.sass', gulp.series('sassit'));
	gulp.watch('src/styles/*.css', gulp.series('joinerup'));
	gulp.watch('src/images/*', gulp.series('imagemin'));
});



