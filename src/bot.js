require('dotenv').config();

// console.log(process.env.DC_BOT_TOKEN); to print tokken

const { Client, MessageEmbed } = require('discord.js');
client = new Client({ intents: ['GUILDS',  'GUILD_MESSAGES'] });
const PREFIX = '$';

// events are important, check out discord api documentation for more info

client.on('ready', () => {
    console.log('firstBot has logged in {' + client.user.tag + '}');
});

//check client user documentation for more info



client.on('message', (message) => {
    // if (message.author.bot) return;
    // console.log(message.content);
    // if (message.content === 'hello'){
    //     message.reply('hello');
    //     message.channel.send('hi');
    // }
    // if(message.content === 'hi'){
    //     message.reply('hi');
    // }
    // avoid infinite loop, don't use same if condition and reply, therefore it doesn't ignore bot messages
    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content // split the message into an array
        .trim() // remove whitespace
        .substring(PREFIX.length) // remove prefix
        .split(/\s+/); //a regular expression instead of writing ' ' so that it can also take multiple spaces
        console.log(CMD_NAME);
        console.log(args);
        if(CMD_NAME === 'say'){
            // embed message

            const { MessageEmbed } = require('discord.js');

            // inside a command, event listener, etc.
            const exampleEmbed = new MessageEmbed()
                .setColor('#0099ff')
                //.setTitle('Some title')
                //.setURL('https://discord.js.org/')
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
                .setDescription(args.join(' '));
                // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
                // .addFields(
                //     { name: 'Regular field title', value: 'Some value here' },
                //     { name: '\u200B', value: '\u200B' },
                //     { name: 'Inline field title', value: 'Some value here', inline: true },
                //     { name: 'Inline field title', value: 'Some value here', inline: true },
                // )
                // .addField('Inline field title', 'Some value here', true)
                // .setImage('https://i.imgur.com/AfFp7pu.png')
                // .setTimestamp()
                // .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
            
            message.channel.send({ embeds: [exampleEmbed] });


        
            message.delete();
        }

        /* people not in the guild can be banned but only if they are in the guild they can be kicked */
        // guild = server

        // if(CMD_NAME === 'kick'){
        //     if(!message.member.hasPermission('KICK_MEMBERS')){
        //         message.reply('you do not have permission to kick members');
        //         return;
        //     }
        //     if (args.length === 0) return message.reply('ID bol re');
        //     const member = message.guild.members.cache.get(args[0]);
        //     if  (member){
        //         member.kick();
        //         message.reply(`${member.user.tag} has been kicked`);
        //     }
        //     else{
        //         message.reply('member not found');
        //     }
        // } 
        
        // else if (CMD_NAME === 'ban'){
        //     // write it ur self 
        // }

        // catch then
        // async await important
        // try catch


    }

});

// client.on('messageReactionAdd',(reaction, user) => {
//     const { message } = reaction.emoji;
//     console.log(reaction.emoji.name);
//     if(reaction.messge.id === '542565236526525')
    
// });

client.login(process.env.DC_BOT_TOKEN);



