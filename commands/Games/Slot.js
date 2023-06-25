const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
  } = require("discord.js");
  module.exports = {
    name: ["games", "slot"],
    description: "play slot",
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
        const { Slots } = require('discord-gamecord');

const Game = new Slots({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: 'Slot Machine',
    color: 'Orange'
  },
  slots: ['🍇', '🍊', '🍋', '🍌']
});

Game.startGame();
    },
  };
  