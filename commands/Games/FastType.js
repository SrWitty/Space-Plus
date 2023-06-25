const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
} = require("discord.js");
module.exports = {
    name: ["games", "fasttype"],
    description: "play fasttype",
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
        const { FastType } = require('discord-gamecord');
        await new FastType({
            message: interaction,
            embed: {
                title: 'FastType',
                color: `Orange`,
                description: 'You have **{{time}}** to type the below sentence.',
            },
            isSlashGame: true,

        }).startGame();
    },
};
