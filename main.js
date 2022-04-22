


const Discord = require("discord.js");
require("dotenv").config()



const client = new Discord.Client({
	intents:[
		"GUILDS",
		"GUILD_MESSAGES"
	]
})

client.on("ready", () => {
	console.log(`logged in as ${client.user.tag}`)
})
client.on("messageCreate", (message) =>{
if (message.content == "No Maidens"){
	message.reply("https://i.gyazo.com/fefa6a15e9b21c73eb18bd9a5ee273ed.gif")
}
else if(message.content == "go get some bitches"){
	message.reply("NO WE DONT DO THAT HERE, GO ACQUIRE SOME MAIDENS https://i.gyazo.com/fefa6a15e9b21c73eb18bd9a5ee273ed.gif"
)}
})
client.login(process.env.token);