var gulp          = require('gulp'),
    postcss       = require('gulp-postcss'),
    cssvars       = require('postcss-simple-vars'),
    nested        = require('postcss-nested'),
    autoprefixer  = require('autoprefixer'),
    // we must add this to the begginning in .pipe
    cssImport     = require('postcss-import'),
    mixins        = require('postcss-mixins');


gulp.task('styles', function(){
  // We want to chain this action and move and chain onto a pipe
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
  // we created a new folder temp/styles **remember to link to html
    .pipe(gulp.dest('./app/temp/styles'));

});
