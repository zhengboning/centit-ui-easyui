const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('default', gulp.series('clean', gulp.parallel('easyui', 'theme'), 'inject'));

gulp.task('build', gulp.series('clean', 'default', 'build'));

gulp.task('gh-pages', gulp.series('build', 'gh-pages'));
