module.exports = {
  config: {
    name: "bio",
    aliases: ["test"],
    version: "2.0",
    author: "Raul",//Tokodori Threader 
    role: 2,
    shortDescription: {
      en: " set bot bio"
    },
    longDescription: {
      en: "This command sets bot bio automatically."
    },
    category: "utility",
    guide: {
      en: "To use this command just say bio"
    }
  },
  onStart: async ({ api, event, args }) => {
    const prefix = "-"; // Replace with your desired prefix 
    const ownerName = "r3ba"; // Replace with your name or bot owner's name
    const createdBy = "r3ba krof"; // Replace with Developer Name

    const bioText = `
❒  PREFIX: ${prefix} 
❒  Owner: ${ownerName}
❒  Developed By: ${createdBy}
    `;

    api.changeBio(bioText, (e) => {
      if (e) {
        api.sendMessage("An error occurred: " + e, event.threadID);
      } else {
        api.sendMessage(`The bot's bio has been updated to:\n${bioText} automatically`, event.threadID);
      }
    });
  }
};
