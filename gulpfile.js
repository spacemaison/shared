const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', [ 'compile source', 'compile test' ])

gulp.task('compile source', () =>
  gulp.src('src/**/*.js')
    .pipe(babel({
      presets: [ 'es2015', 'react' ]
    }))
    .pipe(gulp.dest('dist/src'))
)

gulp.task('compile test', () =>
  gulp.src('test/**/*.js')
    .pipe(babel({
      presets: [ 'es2015', 'react' ]
    }))
    .pipe(gulp.dest('dist/test'))
)
