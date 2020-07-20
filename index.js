require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  //splits the command by whitespace
  const args = msg.content.split(/ +/);
  //const command = args.shift().toLowerCase();
  //console.info(`Called command: ${command}`);

  //console.log("Message: "+msg.content);
  let regex = new RegExp('.*[aA]{2,}.*');
  const testAAA = regex.test(msg.content);
  console.info("Message: " + msg.content);
  let command = "";
  if(testAAA == true){
    command = 'aaaa';
  }
  else{
    console.info("command is invalid");
  }

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }



// if (msg.content.startsWith('!kick')) {
//   // Assuming we mention someone in the message, this will return the user
//   // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
//   const user = msg.mentions.users.first();
//   // If we have a user mentioned
//   if (user) {
//     // Now we get the member from the user
//     const member = msg.guild.member(user);
//     // If the member is in the guild
//     if (member) {
//       /**
//        * Kick the member
//        * Make sure you run this on a member, not a user!
//        * There are big differences between a user and a member
//        */
//       member
//         .kick('Optional reason that will display in the audit logs')
//         .then(() => {
//           // We let the message author know we were able to kick the person
//           msg.reply(`Successfully kicked ${user.tag}`);
//         })
//         .catch(err => {
//           // An error happened
//           // This is generally due to the bot not being able to kick the member,
//           // either due to missing permissions or role hierarchy
//           msg.reply('I was unable to kick the member');
//           // Log the error
//           console.error(err);
//         });
//     } else {
//       // The mentioned user isn't in this guild
//       msg.reply("That user isn't in this guild!");
//     }
//     // Otherwise, if no user was mentioned
//   } else {
//     msg.reply("You didn't mention the user to kick!");
//   }
// }
  

});
