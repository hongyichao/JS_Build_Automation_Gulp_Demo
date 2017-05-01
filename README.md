# JS_Build_Automation_Gulp_Demo

1. Install Node.js to obtain npm 
2. run cmd.exe
3. Under the project directory:

        3.1  type "npm install" and enter to restore developing tools, such as Gulp, Karma and Jasmine
        3.2  type "bower install" and enter to restore AngularJS, jQuery, Bootstrap and Angular Mock

4. Under the project directory 

        4.1  type "gulp" and enter to start jshint which will check JavaScript syntax and coding styles 
        4.2  type "gulp buildApp" to ................
        
                4.2.1 concatenate all .js and .css files and inject dependencies into index.html file 
                4.2.2 add dependency injection annotations into .js files 
                4.2.3 uglify .js files and .css files
                4.2.4 revision the js and css file names 
        4.3  type "gulp bump" to update the version specified in the package.json and bower.json 
        
                4.3.1 "gulp bump -- type=pre" will bump the prerelease version *.*.*-X
                4.3.2 "gulp bump -- type=patch" or no flag will bump the patch version *.*.X
                4.3.3 "gulp bump -- type=minor" will bump the minor version *.X.*
                4.3.4 "gulp bump -- type=major" will bump the major version X.*.*
                4.3.5 "gulp bump -- version=1.2.3" will bump to a specific version and ignore other flags


