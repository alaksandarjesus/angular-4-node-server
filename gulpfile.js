/**
 * Module Dependencies
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function(cb) {
    return nodemon({
            script: 'server/app.js',
            ignore: [
                'gulpfile.js',
                'node_modules/'
            ]
        })
        .on('start', function() {

        })
        .on('restart', function() {

        });
});

gulp.task('default', ['nodemon'], function() {});