const {
  ApplicationCommandOptionType,
  ChannelType,
  EmbedBuilder,
} = require("discord.js");
  module.exports = {
    name: ["games", "2048"],
    description: "play 2048",
    category: "Games",
    options: [],
    permissions: {
      channel: [],
      bot: [],
      user: [],
    },
    settings: {
      isPremium: false,
      isOwner: false,
      inVoice: false,
      isNSFW: false,
    },
    run: async (interaction, client) => {

        await interaction.deferReply({ ephemeral: false }).catch((error) => {
           if (error.code === 429) {
          console.log('Bot has been timed out.');}
          else console.log(error);
        });
      
        const { TwoZeroFourEight } = require("discord-gamecord");

        await new TwoZeroFourEight({
            message: interaction,
            isSlashGame: true,
            embed: {
                title: '2048',
                color: `Orange`,
            },
            emojis: {
                up: '⬆️',
                right: '➡',
                left: '⬅️',
                down: '⬇️',
            },


        }).startGame();

    },
  };
  