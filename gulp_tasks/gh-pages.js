const gulp = require('gulp');

var ghpages = require('gh-pages');

const conf = require('../conf/gulp.conf');

gulp.task('gh-pages', ghPages);

function ghPages() {
  return ghpages.publish(conf.path.dist());
}
