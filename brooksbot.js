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
		message.channel.send(type);
  	}
	elseif (message.content.substring(0,6) ==='-quote') {
	    var type = 2;
		message.channel.send(type);
	}
	elseif (message.content.substring(0,4) === '-add') {
	    var type = 3;
		message.channel.send(type);
	}
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
