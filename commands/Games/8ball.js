const {
    ApplicationCommandOptionType,
    ChannelType,
    EmbedBuilder,
  } = require("discord.js");
  module.exports = {
    name: ["games", "8ball"],
    description: "8ball game",
    category: "Games",
    options: [
        {
            name: "question",
            description: "The question you want to ask",
            type: ApplicationCommandOptionType.String,
            required: true,

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
     const question = interaction.options.getString("question");
     var antwoorden = [
        "Yes!",
        "Unfortunately not",
        "You are absolutely right!",
        "No, sorry.",
        "I agree",
        "No idea!",
        "I am not that smart ..",
        "My sources say no!",
        "It is certain",
        "You can rely on it",
        "Probably not",
        "Everything points to a no",
        "No doubt",
        "Absolutely",
        "I do not know",
        "I do not think so",
        "I am not sure",
        "I have no idea",
        "Ask me later",
        "Better not to tell you now",
        "I can not predict that now",
        "Concentrate and ask again",
        "Do not count on it",
        "My answer is no",
        "My sources say no",
        "Outlook is not so good",
        "Very doubtful",
        "No",
        "Maybe",
    ];


    var resultaat = Math.floor((Math.random() * antwoorden.length));
   
    client.embed({
        title: `${client.emotes.normal.ball}・8ball`,
        desc: `See the answer on your question!`,
        fields: [
            {
                name: `💬︙Your Question`,
                value: `\`\`\`${question}\`\`\``,
                inline: false
            },
            {
                name: `🤖︙Bot Answer`,
                value: `\`\`\`${antwoorden[resultaat]}\`\`\``,
                inline: false
            }
        ],
        type: 'editreply'
    }, interaction);


    },
  };
  