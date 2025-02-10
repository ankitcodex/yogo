var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');
var smushit = require('gulp-smushit');
var browserSync = require('browser-sync').create(); 

// scss to css
gulp.task('style', function(){
  return gulp.src('src/assets/scss/**/**.scss',{sourcemaps:false})
    .pipe(sass({
      //  outputStyle: 'compressed' //If Convert normal style so remove this line      
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist/assets/css', { sourcemaps: '.' }))
});

// Include Html
gulp.task('html', function() {
  return gulp.src(['src/html/pages/**.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',     
    }))
    .pipe(gulp.dest('dist/html'));
});

// image optimizer
gulp.task('imgmin', function () {
  return gulp.src('src/assets/images/**/*{jpg,png,svg,ico,gif}')
    .pipe(smushit())
    .pipe(gulp.dest('dist/assets/images'));
});

// Build Js
gulp.task('buildjs', function() {
  return gulp.src('src/assets/js/**')
  .pipe(gulp.dest('dist/assets/js'))
})

// Build assets
gulp.task('buildassets', function() {
  return gulp.src(["src/assets/**/*.*", "!src/assets/scss/**/*.*"])
    .pipe(gulp.dest('dist/assets/'))
})

// BrowserSync Reload
gulp.task('browsersync', function() {
  browserSync.init({
      proxy: "http://localhost/my-theme/yogo/dist/html/index.html"
  });
})

// Watch Tasks
gulp.task('watch', function(){
  gulp.watch('src/assets/scss/**/*.scss', gulp.series(['style']))
      .on("change", browserSync.reload); 
  gulp.watch('src/html/**/**.html', gulp.series(['html']))
      .on("change", browserSync.reload);
  gulp.watch('src/assets/js/**/*.js', gulp.series(['buildjs']))
      .on("change", browserSync.reload);
  gulp.watch(["src/assets/**/*.*", "!src/assets/scss/**/*.*"], gulp.series(['buildassets']));
})

// Default Task 
const runtheme = gulp.parallel("browsersync", "watch");
gulp.task(
  "default",
  gulp.series('buildjs','buildassets','style','html', runtheme)
);