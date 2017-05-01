var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });
var args = require('yargs').argv;
var config = require('./gulp.config')();

gulp.task('default', function () {


});

gulp.task('wiredep', function () {

    var options = config.getDefaultWiredepOptions;

    var wiredep = require('wiredep').stream;

    gulp
        .src(config.index)
        .pipe(wiredep(options)) //inject bower components, such as, jQuery, AngularJS and Bootstrap
        .pipe($.inject(gulp.src(config.alljs))) //inject all custom js files
        .pipe($.inject(gulp.src(config.allcss))) //inject all custom css files
        .pipe(gulp.dest('.'));
});

gulp.task('buildApp', ['wiredep'], function () {

    var assetFilter = $.filter(['**/*.js', '**/*.css'], { restore: true });
    var jsAppFilter = $.filter(['**/app.js'], { restore: true });

    return gulp
        .src(config.index)
        .pipe($.plumber())
        .pipe($.useref())
        .pipe(jsAppFilter)
        .pipe($.ngAnnotate())
        .pipe(jsAppFilter.restore)
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', $.csso()))
        .pipe(assetFilter)
        .pipe($.rev())
        .pipe(assetFilter.restore)
        .pipe($.revReplace())
        .pipe(gulp.dest('./build'))
        .pipe($.rev.manifest())
        .pipe(gulp.dest('./build'));

});

gulp.task('bump', function () {

    var msg = 'Bumping versions';
    var type = args.type;
    var version = args.version;

    var options = {};

    if (version) {
        options.version = version;
        msg += ' to ' + version;
    }
    else {
        options.type = type;
        msg += ' for a ' + type;
    }

    log(msg);

    return gulp
        .src(config.packages)
        .pipe($.bump(options))
        .pipe($.print())
        .pipe(gulp.dest(config.root));

});

function log(msg) {

    $.util.log(msg);
}