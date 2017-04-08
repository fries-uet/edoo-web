'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var shell = require('gulp-shell');
var rename = require("gulp-rename");

/**
 * Build and deploy app
 */
gulp.task('build', shell.task([
    'ng build --prod'
]));

gulp.task('fix404', ['build'], function () {
    return gulp.src([
        'public/index.html'
    ])
        .pipe(rename('404.html'))
        .pipe(gulp.dest('public'));
});

gulp.task('deploy', ['fix404'], shell.task([
    'git add public/',
    'git commit -am "Deploy"',
    'git push --all',
    'echo "Deploy done!"'
]));