const Discord = require("discord.js")

module.exports = {
    name: "clear", // Coloque o nome do comando
    description: "Limpe o canal de texto", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "",
            description: "",
            type: Discord.ApplicationCommandOptionType.Number,
            required: true,
        } 
            
    ],

    run: async (client, interaction) => {

    }
}