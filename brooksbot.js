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
	case '1':
			var rand = Math.floor(Math.random() * quoSize);
			message.channel.send(quo[rand]);
	break;
	case '2':
//			var mess = message.content.toLowerCase();
//			var stopcheck = [];
//	   for (rand=Math.floor(Math.random() * quoSize); stopcheck.length < quoSize;rand=Math.floor(Math.random() * quoSize)) {
//		if (stopcheck.includes(rand)==false) {
//			if (wordInString(quo[rand].toLowerCase(),mess.substring(7))) {
//		                    message.channel.send(quo[rand]);
//				stopcheck.splice(0,4);
//				break;
//			}
//			else {
//				stopcheck.splice(0,0,rand);
//			}
//		}
//		else {
//			continue;
//		}
//	   }
//		if (stopcheck.length >= quoSize) {
//	        		message.channel.send('No quote found');
//		}
//	}
        break;
	case '3':
			
	break;
	case '4':
	break;
    	}
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
