const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
} = require("discord.js");
module.exports = {
    name: ["games", "flood"],
    description: "play Flood",
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
        const { Flood } = require('discord-gamecord');

        const Game = new Flood({
            message: interaction,
            isSlashGame: true,
            embed: {
                title: 'Flood',
                color: 'Orange',
            },
            difficulty: 13, // Easy = 8, Medium = 13, Hard = 18
            timeoutTime: 60000,
            buttonStyle: 'PRIMARY',
            emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
            winMessage: 'You won! You took **{turns}** turns.',
            loseMessage: 'You lost! You took **{turns}** turns.',
            playerOnlyMessage: 'Only {player} can use these buttons.'
        });

        await Game.startGame();
    },
};
