module.exports = function () {

    var root = './';

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

    return config;
};