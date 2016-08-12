'use strict';

const gulp = require('gulp');

var bowerRequireJS = require('bower-requirejs');

gulp.task('bower', bower);

function bower() {
  var options = {
    config: 'src/config.js',
    exclude: ['requirejs'],
    transitive: true
  };

  return bowerRequireJS(options, function (rjsConfigFromBower) {
    // all done!
  });
}
