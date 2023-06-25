const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
} = require("discord.js");
module.exports = {
    name: ["games", "match-pairs"],
    description: "play matchpairs",
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
        const { MatchPairs } = require('discord-gamecord');

const Game = new MatchPairs({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: 'Match Pairs',
    color: 'Orange',
    description: '**Click on the buttons to match emojis with their pairs.**'
  },
  timeoutTime: 60000,
  emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
  winMessage: '**You won the Game! You turned a total of `{tilesTurned}` tiles.**',
  loseMessage: '**You lost the Game! You turned a total of `{tilesTurned}` tiles.**',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

await Game.startGame();
    },
};
