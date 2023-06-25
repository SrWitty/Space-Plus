const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
  } = require("discord.js");
  module.exports = {
    name: ["games", "would-you-rather"],
    description: "play would you rather",
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
        await interaction.deferReply({ ephemeral: false }).catch(() => {});
        const { WouldYouRather } = require('discord-gamecord');

const Game = new WouldYouRather({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: 'Would You Rather',
    color: 'Orange',
  },
  buttons: {
    option1: 'Option 1',
    option2: 'Option 2',
  },
  timeoutTime: 60000,
  errMessage: 'Unable to fetch question data! Please try again.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

 await Game.startGame();
    },
  };
  