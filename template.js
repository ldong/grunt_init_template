exports.description = 'Set up an express and backbone application';

exports.template = function(grunt, init, done){
    init.process({}, [
        init.prompt('name'),
        init.prompt('description', 'Cool App'),
        init.prompt('version'),
        init.prompt('license', 'MIT'),
        init.prompt('author_name'),
        init.prompt('author_url')
    ], function(err, props){
        var files = init.filesToCopy(props);
        init.addLicenseFiles(files, props.license);
        init.copyAndProcess(files, props);
        init.writePackageJSON("package.json", {
            name: props.name,
            version: props.version,
            description: props.description,
            author: {
                name : author_name,
                url : props.author_url
            },
            scripts: {
                start: 'nodemon server.js'
            },
            dependencies: {
                'express': 'latest',
                'jade': 'latest'
            },
            devDependencies: {
                grunt: '0.4.5',
                'grunt-contrib-clean':  '0.6.0',
                'grunt-contrib-coffee': '0.12.0',
                'grunt-contrib-concat': '0.5.0',
                'grunt-contrib-jshint': '0.10.0',
                'grunt-contrib-nodeunit': '0.4.1',
                'grunt-contrib-watch': '0.6.1',
                nodemon: 'latest'
            }
        });
        done();
    });
}

