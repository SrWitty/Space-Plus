const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
  } = require("discord.js");
  module.exports = {
    name: ["games", "minesweeper"],
    description: "play minesweeper",
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
        const { Minesweeper } = require('discord-gamecord');

const Game = new Minesweeper({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: 'Minesweeper',
    color: 'Orange',
    description: 'Click on the buttons to reveal the blocks except mines.'
  },
  emojis: { flag: '🚩', mine: '💣' },
  mines: Math.floor(Math.random() * 20) + 1,//It Selects Random Number of Mines from 1 to 20
  timeoutTime: 60000,
  winMessage: 'You won the Game! You successfully avoided all the mines.',
  loseMessage: 'You lost the Game! Beaware of the mines next time.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
    },
  };
  