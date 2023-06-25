const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
} = require("discord.js");
module.exports = {
    name: ["games", "hangman"],
    description: "play hangman",
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
        const themes = [
            "nature",
            "discord",
            "winter",
            "sport",
            "color",
            "camp",
            "fruit",
            "pokemon"
        ]
        await interaction.deferReply({ ephemeral: false }).catch(() => {});
        const { Hangman } = require('discord-gamecord');

        const Game = new Hangman({
            message: interaction,
            isSlashGame: true,
            embed: {
                title: 'Hangman',
                color: 'Orange',
            },
            hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
            customWord: null,
            timeoutTime: 60000,
            theme: themes[Math.floor(Math.random() * themes.length)],
            winMessage: 'You won! The word was **{word}**.',
            loseMessage: 'You lost! The word was **{word}**.',
            playerOnlyMessage: 'Only {player} can use these buttons.'
        });

        await Game.startGame();
    },
};
