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
	}else if (message.content.toLowerCase() === '-gifs') {
		var type = 5;
	}else if (message.content === '-samNod') {
		var type = 6;
	}else if (message.content === '-tonyCheer') {
		var type = 7;
	}else if (message.content === '-wtf') {
		var type = 8;
	}else if (message.content === '-terrible') {
		var type = 9;
	}else if (message.content === '-kakkoShrug') {
		var type = 10;
	}else if (message.content === '-dance') {
		var type = 11;
	}else if (message.content === '-tonyOkay') {
		var type = 12;
	}else if (message.content === '-igorCheer') {
		var type = 13;
	}else if (message.content === '-stfu') {
		var type = 14;
	}else if (message.content === '-kakkoDance') {
		var type = 15;
	}else if (message.content === '-breadDance') {
		var type = 16;
	}else if (message.content === '-stagger') {
		var type = 17;
	}else if (message.content === '-hotBread') {
		var type = 18;
	}else if (message.content === '-WHAT') {
		var type = 19;
	}else {
		var type = 20;
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
			message.channel.send('Possible GIF commands:\n-samNod\n-tonyCheer\n-wtf\n-terrible\n-kakkoShrug\n-dance\n-tonyOkay\n-igorCheer\n-stfu\n-kakkoDance\n-breadDance\n-stagger\n-hotBread\n-WHAT');
	break;
	
	case 6:
			message.channel.send('https://cdn.discordapp.com/attachments/411458345942384640/740639734073786448/Sammy.gif');
	break;
			
	case 7:
			message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740641162653597786/are_you_not_entertained.gif');
	break;
		
	case 8:
			message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740641784543182848/wtf_is_this.gif');
	break;
			
	case 9:
			message.channel.send('https://media.discordapp.net/attachments/379789033750134789/740641455613149294/fuckingTERRIBLE.gif');
	break;
			
	case 10:
			message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740641609183658064/kakkoAgrees.gif');
	break;
			
	case 11:
			message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740641204424933436/dudes_dancin.gif');
	break;
			
	case 12:
			message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740641660953952256/mmkay.gif');
	break;
			
	case 13:
			message.channel.send('https://cdn.discordapp.com/attachments/341677891677061121/733358973654139020/igorCheer.gif');
	break;
		
	case 14:
			message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740653406368170065/shutup.gif');
	break;
		
	case 15:
			message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740653662791008486/kakkdance.gif');
	break;
			
	case 16:
			message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740654451815350324/breadjam.gif');
	break;
			
	case 17:
			message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740653859898130463/stagger.gif');
	break;
			
	case 18:
			message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740653896405614612/hotBread.gif');
	break;
			
	case 19:
			message.channel.send('https://cdn.discordapp.com/attachments/379789033750134789/740654312031781015/WHAT.gif');
	break;
	
	case 20:
	break;
    	}
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
 
