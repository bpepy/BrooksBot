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
			var github = new Github({
			  username: 'bpepy',
			  password: 'pass4_GitHub',
			  auth: 'basic'
			});
	 
			// Creates an object representing the repository you want to work with
			var repository = github.getRepo('bpepy', 'BrooksBot');
	 
			// Creates a new file (or updates it if the file already exists)
			// with the content provided
			repository.write(
			   'master', // e.g. 'master'
			   'BrooksBot/quotelog.txt', // e.g. 'blog/index.md'
			   'test', // e.g. 'Hello world, this is my new content'
			   'new quote added', // e.g. 'Created new index'
			   function(err) {}
			);

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
