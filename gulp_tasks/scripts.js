'use strict';

const gulp = require('gulp');

const concat = require('gulp-concat');
const requirejs = require('requirejs');

const conf = require('../conf/gulp.conf');
const requirejsConf = require('../conf/requirejs.conf').config;

gulp.task('scripts', scripts);

function scripts() {
  // return gulp.src(conf.path.src('**/*.js'))
  //   .pipe(amdOptimize('main', requirejsConf))
  //   .pipe(concat('index.js'))
  //   .pipe(gulp.dest(conf.path.dist()));

  requirejs.optimize(requirejsConf, function (buildResponse) {

    console.log(buildResponse);

    //buildResponse is just a text output of the modules
    //included. Load the built file for the contents.
    //Use config.out to get the optimized file contents.
  }, function(err) {
    //optimization err callback
    console.error(err);
  });
}
