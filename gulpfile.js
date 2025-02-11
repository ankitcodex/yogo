var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');
var cwebp = require('gulp-cwebp');
var terser = require('gulp-terser');
var browserSync = require('browser-sync').create(); 

// Task to delete the dist folder
gulp.task('clean', function () {
    return del(['dist']);
});

// scss to css
gulp.task('style', function(){
  return gulp.src('src/assets/scss/**/**.scss',{sourcemaps:false})
    .pipe(sass({
       outputStyle: 'compressed' //If Convert normal style so remove this line      
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

// JavaScript Minify & Build
const isMinify = true;
gulp.task('buildjs', function () {
  return gulp.src('src/assets/js/**/*.js', { sourcemaps: !isMinify })
    .pipe(isMinify ? terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      output: {
        comments: false,
      }
    }) : require('gulp-util').noop())
    .pipe(gulp.dest('dist/assets/js', { sourcemaps: '.' }))
    .pipe(browserSync.stream());
});


// Build assets
gulp.task('buildassets', function() {
  return gulp.src(["src/assets/**/*.*", "!src/assets/scss/**/*.*"])
    .pipe(gulp.dest('dist/assets/'))
})

// webp convert
gulp.task('webp_img', () => {
  return gulp.src('src/assets/images/**/*.{jpg,png}')
    .pipe(cwebp())
    .pipe(gulp.dest('dist/assets/images/'))
    .on('end', () => {    
      del.sync(['dist/assets/images/**/*.{jpg,png}'], { force: true });
    });
});


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
  gulp.series('clean','buildassets','webp_img','buildjs','style','html', runtheme)
);