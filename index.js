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
});
