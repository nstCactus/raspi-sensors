/**
 * @author nstCactus
 * @date 21/10/16 13:54
 */
const gulp  = require('gulp');
const ts    = require('gulp-typescript');
const merge = require('merge2');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () =>
{
    const tsResult = tsProject.src()
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))
    ]);
});

gulp.task('watch', ['scripts'], function ()
{
    gulp.watch([
        'src/**/*.ts',
        'typings/**/*.ts'
    ], ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
