var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');




gulp.task('reload',function(){

browserSync.reload();

});


gulp.task('serve',['sass'],function(){


	browserSync({
		server: 'src'
	});

	gulp.watch("*.html").on('change', browserSync.reload); 
	gulp.watch('scss/**/*.scss',['sass']);

});

gulp.task('sass',function(){


return gulp.src('src/scss/**/*.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(autoprefixer({
  	browsers:['last 3 versions']
  }))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});

gulp.task('default',['serve']);