const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const path = require('path');

gulp.task('sass', function () {
  return gulp.src('assets/src/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rename({
      dirname: ''
    }))
    .pipe(gulp.dest('assets'));
});

// Функция для создания задач компиляции скриптов для разных папок
function compileScripts(folder) {
  return gulp.src(path.join('assets/js', folder, '/**/*.js'))
  .pipe(concat(folder + '.js'))
  .pipe(uglify())
  .pipe(gulp.dest('assets'));
}

gulp.task('scripts', function (done) {
  // Список папок для компиляции
  const folders = ['template', 'article', 'homepage'];

  // Проходим по каждой папке и компилируем скрипты
  folders.forEach(function (folder) {
    compileScripts(folder);
  });

  done();
});

gulp.task('watch', function () {
  gulp.watch('assets/src/**/*.scss', gulp.series('sass'));
  gulp.watch('assets/js/**/**/*.js', gulp.series('scripts'));
});

gulp.task('default', gulp.series('sass', 'scripts', 'watch'));