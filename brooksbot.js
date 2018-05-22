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
	var rand = Math.floor(Math.random() * quoSize);

        if (message.content === '-quote') {
    		var type = 1;
  	}else if (message.content.substring(0,6) === '-quote') {
		var type = 2;
	}else if (message.content.substring(0,4) === '-add') {
		var type = 3;
	}else {
		var type = 4;
	}
	
	switch(message.author.bot) {
	case true:
	break;
	case false:
    	    message.channel.send(type);
        break;
    }
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
