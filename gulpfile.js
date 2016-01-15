'use strict';

let gulp = require('gulp');
let server = require('gulp-express');

gulp.task('server', () => {
	server.run(['main.js']);
});
