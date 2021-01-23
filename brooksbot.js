const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	
	function wordInString(s, word){
 	return new RegExp( '\\b' + word + '\\b', 'i').test(s);
	}
	
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
	}else if (message.content === '-mika') {
		var type = 20;
	}else if (message.content === '-tonyNo') {
		var type = 21;
	}else if (message.content === '-quinnSad') {
		var type = 22;
	}else if (message.content === '-sisterLover') {
		var type = 23;
	}else if (message.content === '-laffyCelly') {
		var type = 24;	
	}else if (message.content === '-fistPump') {
		var type = 25;
	}else if (message.content === '-kravSex') {
		var type = 26;
	}else if (wordInString(message.content.toLowerCase(),'testt')== 1) {
		var type = 27;
	}else {
		var type = 28;
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
	break;
	case 5:
			message.channel.send('Possible GIF commands:\n-samNod\n-tonyCheer\n-wtf\n-terrible\n-kakkoShrug\n-dance\n-tonyOkay\n-igorCheer\n-stfu\n-kakkoDance\n-breadDance\n-stagger\n-hotBread\n-WHAT\n-mika\n-tonyNo\n-quinnSad\n-sisterLover\n-laffyCelly\n-fistPump\n-kravSex');
	break;
	
	case 6:
			message.channel.send('https://imgur.com/a/ihPMgGv');
	break;
			
	case 7:
			message.channel.send('https://imgur.com/a/G1MxOYj');
	break;
		
	case 8:
			message.channel.send('https://imgur.com/a/Sw2k3f4');
	break;
			
	case 9:
			message.channel.send('https://imgur.com/a/VWRX5Yo');
	break;
			
	case 10:
			message.channel.send('https://imgur.com/a/FkEuWqQ');
	break;
			
	case 11:
			message.channel.send('https://imgur.com/a/ZKxip70');
	break;
			
	case 12:
			message.channel.send('https://imgur.com/a/QaUxyST');
	break;
			
	case 13:
			message.channel.send('https://imgur.com/a/MnZjR6c');
	break;
		
	case 14:
			message.channel.send('https://imgur.com/a/54wYyAS');
	break;
		
	case 15:
			message.channel.send('https://imgur.com/a/jrFKId8');
	break;
			
	case 16:
			message.channel.send('https://imgur.com/a/JPQ2wFw');
	break;
			
	case 17:
			message.channel.send('https://imgur.com/a/8kseGq1');
	break;
			
	case 18:
			message.channel.send('https://imgur.com/a/MPjwyeL');
	break;
			
	case 19:
			message.channel.send('https://imgur.com/a/gUDfpMW');
	break;
	
	case 20:
			message.channel.send('https://imgur.com/BmBlCjz');
	break;
			
	case 21:
			message.channel.send('https://imgur.com/a/zEjHRHF');
	break;
			
	case 22:
			message.channel.send('https://imgur.com/a/aNa9Nky');
	break;
			
	case 23:
			message.channel.send('https://imgur.com/a/qLPeqgQ');
	break;
	
	case 24:
			message.channel.send('https://imgur.com/HrYxyXl');
	break;
		
	case 25:
			message.channel.send('https://imgur.com/a/uzEaYHb');
	break;
		
	case 26:
			message.channel.send('https://imgur.com/a/g7G30iZ');
	break;
			
	case 27:
			message.channel.send('https://imgur.com/a/4CNLzem');
	break;
				
	case 28:
	break;
    	}
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
 
