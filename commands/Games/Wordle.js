const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
  } = require("discord.js");
 const words = require('random-words');
  module.exports = {
    name: ["games", "wordle"],
    description: "A Game Of Wordle",
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
        const { Wordle } = require('discord-gamecord');

const Game = new Wordle({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: 'Wordle',
    color: 'Orange',
  },
  customWord: `${words({ exactly: 1, maxLength: 7 })}`,
  timeoutTime: 60000,
  winMessage: 'You won! The word was **{word}**.',
  loseMessage: 'You lost! The word was **{word}**.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
    },
  };
  