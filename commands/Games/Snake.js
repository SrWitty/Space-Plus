const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
  } = require("discord.js");
  module.exports = {
    name: ["games", "snake"],
    description: "Play snake Game",
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
        const { Snake } = require('discord-gamecord');

const Game = new Snake({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: 'Snake Game',
    overTitle: 'Game Over',
    color: 'Orange'
  },
  emojis: {
    board: '⬛',
    food: '🍎',
    up: '⬆️', 
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  snake: { head: '🟢', body: '🟩', tail: '🟢', skull: '💀' },
  foods: ['🍎', '🍇', '🍊', '🍭', '🥕', '🥝', '🌽', '🍔', '🍕', '🍦'],
  stopButton: 'Stop',
  timeoutTime: 60000,
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();

    },
  };
  