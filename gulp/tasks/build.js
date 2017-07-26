
var gulp        = require('gulp'),
//gulp-imagemin --save-dev
    imagemin    = require('gulp-imagemin'),
    del         = require('del'),
// gulp-usemin --save-dev usemin compresss and revision our css and js
    usemin      = require('gulp-usemin'),
// gulp-rev gulp-cssnano gulp-uglify --save-dev / to be use on usemin
    rev         = require('gulp-rev'),
    cssnano     = require('gulp-cssnano'),
    uglify      = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    server: {
      baseDir: "docs"
    }
  });
});

// this task is to delete the 'dist' folder so we begin each build with a clean slate
// if we rename or change our app folder it will reflect and change in the dist folder
gulp.task('deleteDistFolder', ['icons'], function() {
  return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/script/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));

});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  // we want to exclude certain file(!), we only need the sprite file , we don't need all the images & icons
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
  // to compress file size we use imagemin
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
  gulp.start("usemin");
});

gulp.task('usemin', [ 'styles', 'scripts'], function() {
  // will copy our html to our dist folder
  return gulp.src("./app/index.html")
// we have to wrap our html css file to use usemin
  .pipe(usemin({
    css: [function() {return rev()}, function() {return cssnano()}],
    js: [function() {return rev()}, function() {return uglify()}]
  }))
  .pipe(gulp.dest("./docs"));
});

// we have to include our task to our dependency / we have import in our gulp.js file : run gulp build
gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
