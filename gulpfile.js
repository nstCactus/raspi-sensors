/**
 * @author nstCactus
 * @date 21/10/16 13:54
 */
var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))
    ]);
});

gulp.task('watch', ['scripts'], function() {
    gulp.watch([
        'src/**/*.ts',
        'typings/**/*.ts'
    ], ['scripts']);
});

gulp.task('default',[ 'scripts', 'watch' ]);
