const gulp = require('gulp');

const del = require('del');
const filter = require('gulp-filter');
const useref = require('gulp-useref');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');
const spriter = require('gulp-css-spriter');
const uglifySaveLicense = require('uglify-save-license');
const inject = require('gulp-inject');

const conf = require('../conf/gulp.conf');
const themeConf = require('../conf/theme.conf').config;

gulp.task('sprite', sprite);
gulp.task('copy', copy);
gulp.task('build[clean]', clean);
gulp.task('build', gulp.series('copy', 'sprite', build, 'build[clean]'));

function clean() {
  return del([
    conf.path.dist('easyui'),
    conf.path.dist('styles/theme')
  ]);
}

function copy() {
  return gulp.src(conf.path.tmp('**/*'))
    .pipe(gulp.dest(conf.paths.dist));
}

var spriteImages = [];
function sprite() {
  const easyuiFilter = filter(conf.path.dist('easyui/**/*.css'), {restore: true});
  const themeFilter = filter(conf.path.dist('styles/theme/*.css'), {restore: true});
  const colorFilter = filter(conf.path.dist(`styles/theme/colors/${themeConf.color}/*.css`), {restore: true});

  // return gulp.src(conf.path.dist('**/easyui/css/*.css'))
  return gulp.src([conf.path.dist('**/*.css')])
    // .pipe(spriter({
    //   spriteSheet: './dist/styles/images/iconsprite.png',
    //   pathToSpriteSheetFromCSS: 'images/iconsprite.png',
    //   silent: false,
    //   spriteSheetBuildCallback: function(err, result) {
    //     // 准备清除的图片
    //     var coordinates = result.coordinates;
    //     if (coordinates) {
    //       for(file in coordinates) {
    //         spriteImages.push(file);
    //       }
    //     }
    //   }
    // }))

    // easyui
    .pipe(easyuiFilter)
    .pipe(spriter({
      spriteSheet: './dist/styles/images/easyui-sprite.png',
      pathToSpriteSheetFromCSS: 'images/easyui-sprite.png',
      silent: false,
    }))
    .pipe(easyuiFilter.restore)

    // theme
    .pipe(themeFilter)
    .pipe(spriter({
      spriteSheet: './dist/styles/images/theme-sprite.png',
      pathToSpriteSheetFromCSS: 'images/theme-sprite.png',
      silent: false,
    }))
    .pipe(themeFilter.restore)

    // color
    .pipe(colorFilter)
    .pipe(spriter({
      spriteSheet: './dist/styles/images/color-sprite.png',
      pathToSpriteSheetFromCSS: 'images/color-sprite.png',
      silent: false,
    }))
    .pipe(colorFilter.restore)

    .pipe(gulp.dest(conf.paths.dist));
}


function build() {
  const htmlFilter = filter(conf.path.dist('**/*.html'), {restore: true});
  const jsFilter = filter(conf.path.dist('**/*.js'), {restore: true});
  const cssFilter = filter(conf.path.dist('**/*.css'), {restore: true});

  return gulp.src(conf.path.dist('index.html'))
    .pipe(useref())

    // js
    .pipe(jsFilter)
    .pipe(sourcemaps.init())
    .pipe(uglify({preserveComments: uglifySaveLicense})).on('error', conf.errorHandler('Uglify'))
    .pipe(rev())
    .pipe(sourcemaps.write('maps'))
    .pipe(jsFilter.restore)

    // css
    .pipe(cssFilter)
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(rev())
    .pipe(sourcemaps.write('maps'))
    .pipe(cssFilter.restore)

    // replace
    .pipe(revReplace())

    // html
    .pipe(htmlFilter)
    .pipe(htmlmin())
    .pipe(htmlFilter.restore)

    .pipe(gulp.dest(conf.path.dist()));

}
