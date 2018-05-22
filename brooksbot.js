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

if (message.contents.substring(0,6) == '-quote') {
        var args = message.contents.substring(6).split(' ');
        var cmd = args[0];
//check quotes 
var fs = require('fs');

try {  
    var data = fs.readFileSync('quotelog.txt', 'utf8');    
} catch(e) {}

var quo = data.split(";");
var quoSize = quo.length;


	if (message.contents.substring(6,7) == ' ') {
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
	}
	else {
		var rand=Math.floor(Math.random() * quoSize);
	
	        switch(cmd) {
	            // !ping
		        case '':
	                message.channel.send(quo[rand]);
	            break;
            
	        }
	}
}
if (message.contents.substring(0,4) == '-add') {
        var args = message.contents.substring(4).split(' ');
        var cmd = args[0];
//check quotes 
var fs = require('fs');

try {  
    var data = fs.readFileSync('quotelog.txt', 'utf8');    
} catch(e) {}
//add quote
	var fs = require('fs');
	var newquo = data+';'+message.substring(4);
		
	fs.writeFile('quotelog.txt',newquo, 'utf8', function(err, data) {  
		    if (err) throw err;
		});

        switch(cmd) {
            // !ping
	    case '':
                message.channel.send('Fake news added');
	    break;
	}
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
