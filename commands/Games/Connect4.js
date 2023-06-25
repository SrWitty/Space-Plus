const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
  } = require("discord.js");
  module.exports = {
    name: ["games", "connect4"],
    description: "play connect4",
    category: "Games",
    options: [
        {
            name: "user",
            required: true,
            description: "The User Whom You Want To Play With",
            type: ApplicationCommandOptionType.User,

        }
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
        const { Connect4 } = require("discord-gamecord");
        const opponent = interaction.options.getUser("user");
        if (!opponent) return interaction.followUp({ content: "Please mention who you want to challenge" });
        await new Connect4({
            message: interaction,
            opponent: opponent,
            isSlashGame: true,
            embed: {
                title: 'Connect 4',
                color: `Orange`,

            },
            emojis: {
                player1: '🔴',
                player2: '🟡',
                board: `⚪`,
            },
            turnMessage: '{emoji} | Its now **{player}** turn!',
            winMessage: '{emoji} | **{winner}** won the game!',
            gameEndMessage: 'The game went unfinished :(',
            drawMessage: 'It was a draw!',
            mentionsUser: true,
        }).startGame();

    },
  };
  