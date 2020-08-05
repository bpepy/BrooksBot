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
	}else if (message.content.substring(0,5) === '-last') {
		var type = 4;
	}else {
		var type = 5;
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
			fs.writeFile('quotelog.txt',newquo, (err) => {
  				if (err) throw err;
			});
			message.channel.send('Fake news added');
/*			var newquo = data+';'+message.content.substring(4);
			var GitHub = require('github-api');

// by default all requests are unauthenticated
// unauthenticated clients are limited to 60 request per hour
			var noAuth = new GitHub();
			repo.write('master', 'BrooksBot/quotelog.txt', 'YOUR_NEW_CONTENTS', 'YOUR_COMMIT_MESSAGE', function(err) {});

//			fs.writeFile('quotelog.txt',newquo, 'utf8', function(err, data) {  
//			    if (err) throw err;
//			});
*/			
	break;
	case 4:
			if (message.content === '-last') {
				var minus = 1;
			}else {
			var minus = parseInt(message.content.substring(5)) + 1;
			}
			var last = quoSize - minus;
			message.channel.send(quo[last]);
	case 5:
	break;
    	}
	if (message.content === '-samNod') {
    	    message.channel.send('https://cdn.discordapp.com/attachments/411458345942384640/740639734073786448/Sammy.gif');
  	    }
	elseif (message.content === '-tonyCheer') {
    	    message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740641162653597786/are_you_not_entertained.gif');
  	    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
 
