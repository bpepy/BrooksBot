const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	
	//check quotes 
	var fs = require('fs');

	try {  
	    	var data = fs.readFileSync('quotelog.txt', 'utf8');    
	} catch(e) {}

	var quo = data.split(";");
	var quoSize = quo.length;

        if (message.content === '-quote') {
    		var type = 1;
  	}else if (message.content.substring(0,6) === '-quote') {
		var type = 2;
	}else if (message.content.substring(0,4) === '-add') {
		var type = 3;
	}else {
		var type = 4;
	}
	
	switch(type) {
	case 1:
			var rand = Math.floor(Math.random() * quoSize);
			message.channel.send(quo[rand]);
	break;
	case 2:
			function wordInString(s, word){
				return new RegExp( '\\b' + word + '\\b', 'i').test(s);
			}
			var mess = message.content.toLowerCase();
			var stopcheck = [];
	   for (rand=Math.floor(Math.random() * quoSize); stopcheck.length < quoSize;rand=Math.floor(Math.random() * quoSize)) {
		if (stopcheck.includes(rand)==false) {
			if (wordInString(quo[rand].toLowerCase(),mess.substring(7))) {
		                    message.channel.send(quo[rand]);
				stopcheck.splice(0,4);
				break;
			}
			else {
				stopcheck.splice(0,0,rand);
			}
		}
		else {
			continue;
		}
	   }
		if (stopcheck.length >= quoSize) {
	        		message.channel.send('No quote found');
		}
        break;
	case 3:
			var newquo = data+';'+message.content.substring(4);
			// Creates a new instance of the Github object exposed by Github.js
'use strict';

var GitHub = require('./github');
var config = {
   username: 'bpepy',
   password: 'pass4_GitHub', // Either your password or an authentication token if two-factor authentication is enabled
   auth: 'basic',
   repository: 'BrooksBot',
   branchName: 'master'
};
var gitHub = new GitHub(config);

/**
 * Reads the content of the file provided. Returns a promise whose resolved value is an object literal containing the
 * name (<code>filename</code> property) and the content (<code>content</code> property) of the file.
 *
 * @param {File} file The file to read
 *
 * @returns {Promise}
 */
function readFile(file) {
   return new Promise(function (resolve, reject) {
      var fileReader = new FileReader();

      fileReader.addEventListener('load', function (event) {
         var content = event.target.result;

         // Strip out the information about the mime type of the file and the encoding
         // at the beginning of the file (e.g. data:image/gif;base64,).
         content = atob(content.replace(/^(.+,)/, ''));

         resolve({
            filename: file.name,
            content: content
         });
      });

      fileReader.addEventListener('error', function (error) {
         reject(error);
      });

      fileReader.readAsDataURL(file);
   });
}

/**
 * Save the files provided on the repository with the commit title specified. Each file will be saved with
 * a different commit.
 *
 * @param {FileList} files The files to save
 * @param {string} commitTitle The commit title
 *
 * @returns {Promise}
 */
function uploadFiles(files, commitTitle) {
   // Creates an array of Promises resolved when the content
   // of the file provided is read successfully.
   var filesPromises = [].map.call(files, readFile);

   return Promise
      .all(filesPromises)
      .then(function(files) {
         return files.reduce(
            function(promise, file) {
               return promise.then(function() {
                  // Upload the file on GitHub
                  return gitHub.saveFile({
                     repository: gitHub.repository,
                     branchName: config.branchName,
                     filename: file.filename,
                     content: file.content,
                     commitTitle: commitTitle
                  });
               });
            },
            Promise.resolve()
         );
      });
}

document.querySelector('form').addEventListener('submit', function (event) {
   event.preventDefault();

   var files = document.getElementById('file').files;
   var commitTitle = document.getElementById('commit-title').value;

   uploadFiles(files, commitTitle)
      .then(function() {
         alert('Your file has been saved correctly.');
      })
      .catch(function(err) {
         console.error(err);
         alert('Something went wrong. Please, try again.');
      });
});

//			fs.writeFile('quotelog.txt',newquo, 'utf8', function(err, data) {  
//			    if (err) throw err;
//			});
			message.channel.send('Fake news added');
	break;
	case 4:
	break;
    	}
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
