const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

	function wordInString(s, word){
		return new RegExp( '\\b' + word + '\\b', 'i').test(s);
	}
var mess=message.contents.toLowerCase();

if (message.content.substring(0,6) === '-quote') {
//check quotes 
var fs = require('fs');
try {  
    var data = fs.readFileSync('quotelog.txt', 'utf8');    
} catch(e) {}
var quo = data.split(";");
var quoSize = quo.length;
var rand = Math.floor(Math.random() * quoSize);
	message.channel.send(quo[rand]);
}
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
