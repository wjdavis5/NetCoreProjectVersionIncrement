var jsonfile = require('jsonfile');
var util = require('util');
//Relative path to project.json file
var file = 'project.json';
var buildNumber = process.env.APPVEYOR_BUILD_VERSION || '1.0.0-*';

jsonfile.readFile(file,
    function(err, project) {
        console.log(project || '');
        console.log(err || '');
        project.version = buildNumber;

        jsonfile.writeFile(file,
            project,
            { spaces: 2 },
            function(err) {
                console.error(err || '');
            });
    });
	
return 0;
