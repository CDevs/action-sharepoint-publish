var spsave = require("spsave").spsave;
var fs = require('fs');

function trimSlashes(string) {
    return string.replace(new RegExp('/', 'g'), '_');
}

var coreOptions = {
    siteUrl: process.env.SITE_URL,
};
var creds = {
    username: process.env.USER,
    password: process.env.PASSWD
};

var now = new Date().toISOString().slice(0,10);

var ref = "";
if (process.env.GITHUB_REF) {
  ref = process.env.GITHUB_REF.substr(process.env.GITHUB_REF.lastIndexOf('/') + 1);
}

var fileOptions = {
    glob: 'Test/**/*.*',
    base: 'Test',
    folder: process.env.LIB_FOLDER, 
};

console.log('Copying with the following options:');
console.log(fileOptions);

spsave(coreOptions, creds, fileOptions)
.then(function(){
    console.log('Success');
})
.catch(function(err){
    console.log('Failed to Copy file');
    console.log(err);
    process.exit(1);
});
