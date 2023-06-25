const {
  ApplicationCommandOptionType,
  ChannelType,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  name: ["games", "ttt"],
  description: "play tic tac toe",
  category: "Games",
  options: [
    {
      name: "user",
      required: true,
      description: "The User Whom You Want To Play With",
      type: ApplicationCommandOptionType.User,
    },
  ],
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

    const opponent = interaction.options.getUser("user");
    if (!opponent) return interaction.followUp({ content: "Please mention who you want to challenge" });

    const { TicTacToe } = require("discord-gamecord");

    new TicTacToe({
      
      message: interaction,
      opponent: opponent,
      xColor: "red",
      oColor: "blurple",
      xEmoji: "❌",
      oEmoji: "0️⃣",
      isSlashGame: true,
    }).startGame();
    

  },
};
