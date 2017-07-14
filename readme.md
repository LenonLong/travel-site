****************** SETUP GULP Globally ******************

install gulp / sudo npm install gulp-cli —g

add to package.json / nom install gulp —save-dev

--------------------------------------------

gulp.src() = point towards a css file  ('./main.css')

gulp.dest() = point to the new css file ('./temp/styles')

pipe()

**************** Setup Gulp Pipe ********************

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

watch('./app/assets/styles/**/*.css', function(){
  gulp.start('styles');
  })
