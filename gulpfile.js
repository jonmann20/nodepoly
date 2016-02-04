'use strict';

let gulp = require('gulp');
let server = require('gulp-express');

gulp.task('default', () => {
	server.run(['main.js']);
});
