//Dependencies
const Discord = require("discord.js")

//Variables
const Database = require("./database.json")
const Bot = new Discord.Client()

var Self = {
    discordbot_token: ""
}

//Main
Bot.on("ready", ()=>{
    console.log("SKAIDB is running.")
})

Bot.on("message", (message)=>{
    if(!message.guild){ return }

    for( i in Database ){
        if(Database[i].requests.indexOf(message.content) !== -1){
            const response_index = Math.floor(Math.random() * Database[i].responses.length)

            message.reply(Database[i].responses[response_index])
        }
    }
})

Bot.login(Self.discordbot_token)