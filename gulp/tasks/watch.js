var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

gulp.watch('./app/index.html', function(){
  browserSync.reload()
});
gulp.watch('./app/assets/styles/**/*.css', gulp.series('cssInject'));
gulp.watch('./app/assets/scripts/**/*.js', gulp.series('scripts'));
});

gulp.task('cssInject', gulp.series('styles', function(){
return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
}));
