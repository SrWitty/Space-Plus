const {
  ApplicationCommandOptionType,
  ChannelType,
  EmbedBuilder,
} = require("discord.js");
const rps = require("discord-rock-paper-scissor");
const game = new rps({
  readyMessage: "Nerds choose your moves in the DMs",
  endTitle: "{winner} won the dang game",
  endDescription: "{winner} is the winner\n{looser} is the looser",
});

module.exports = {
  name: ["games", "rps"],
  description: "start a Rock Paper Scisor Game With a User or With A Bot",
  category: "Games",
  options: [
    {
      name: "user",
      required: false,
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
    const User = interaction.options.getUser("user") || null;

    interaction.reply({ content: `The game is started` });

    if (User && User.bot)
      return interaction.reply({
        content: "You can not play the game with bots",
      });

    if (!User) game.solo(interaction, client);
    else game.duo(interaction, User);
  },
};
