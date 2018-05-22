const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	var fs = require('fs');

try {  
    var data = fs.readFileSync('quotelog.txt', 'utf8');    
} catch(e) {}
	
var quo = data.split(";");
var quoSize = quo.length;
var rand=Math.floor(Math.random() * quoSize);
	
    switch(message.author.bot) {

	case true:
	break;
	case false:
        if (message.content.substring(0,1) === '!') {
    	    message.channel.send(quo[rand]);
  	    }
            break;
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
