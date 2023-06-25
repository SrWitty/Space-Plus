const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
} = require("discord.js");
module.exports = {
    name: ["games", "guess-the-pokemon"],
    description: "Play Guess The Pokemon",
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
        const { GuessThePokemon } = require('discord-gamecord');

        const Game = new GuessThePokemon({
            message: interaction,
            isSlashGame: true,
            embed: {
                title: 'Who\'s The Pokemon',
                color: 'Orange'
            },
            timeoutTime: 60000,
            winMessage: 'You guessed it right! It was a {pokemon}.',
            loseMessage: 'Better luck next time! It was a {pokemon}.',
            errMessage: 'Unable to fetch pokemon data! Please try again.',
            playerOnlyMessage: 'Only {player} can use these buttons.'
        });

        await Game.startGame();
    },
};
