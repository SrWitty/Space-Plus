const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
} = require("discord.js");
module.exports = {
    name: ["games", "findemoji"],
    description: "plays findemoji",
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
        const { FindEmoji } = require('discord-gamecord');

        const Game = new FindEmoji({
            message: interaction,
            isSlashGame: true,
            embed: {
                title: 'Find Emoji',
                color: 'Orange',
                description: 'Remember the emojis from the board below.',
                findDescription: 'Find the {emoji} emoji before the time runs out.'
            },
            timeoutTime: 60000,
            hideEmojiTime: 5000,
            buttonStyle: 'PRIMARY',
            emojis: ['🍉', '🍇', '🍊', '🍋', '🥭', '🍎', '🍏', '🥝'],
            winMessage: 'You won! You selected the correct emoji. {emoji}',
            loseMessage: 'You lost! You selected the wrong emoji. {emoji}',
            timeoutMessage: 'You lost! You ran out of time. The emoji is {emoji}',
            playerOnlyMessage: 'Only {player} can use these buttons.'
        });

        await Game.startGame();
    },
};
