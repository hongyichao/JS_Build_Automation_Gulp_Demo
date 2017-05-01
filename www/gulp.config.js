module.exports = function () {

    var root = './';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({ devDependencies: true })['js'];
    var testRpts = './testReports/';


    var config = {

        index: './index.html',
        root: root,
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
        alljs: ['./scripts/src/*.js'],
        allcss: ['./styles/src/*.css'],
        packages: ['./package.json', './bower.json']
    }

    config.getDefaultWiredepOptions = function () {

        var options = {
            bowerJson: config.json,
            directory: config.directory,
            ignorePath: config.bower.ignorePath
        }

        return options;

    };


    config.karma = getKarmaOptions();

    function getKarmaOptions(){

        var options = {
            files: [].concat(
                bowerFiles,
                './scripts/src/*.js',
                './tests/*.js'
            ),
            exclude: [],
            coverage: {
                dir: testRpts + 'coverage',
                reporters: [
                    { type: 'html', subdir: 'report-html' },
                    { type: 'text-summary' }
                ]
            },
            preprocessors: {}
        };

        options.preprocessors['**/!*.test.js'] = ['coverage'];
        return options;

    };

    return config;
};