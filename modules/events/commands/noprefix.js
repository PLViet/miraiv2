
module.exports.config = {
    name: "noprefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HTHB",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "anlon.gif")) request("https://i.redd.it/fhfb6iv99l561.gif").pipe(fs.createWriteStream(dirMaterial + "anlon.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Bye ${name} chúc mừng bạn đã chửi bot và ăn bùi vì tin nhắn này sẽ được gửi đến chủ BOT !`,
                attachment: fs.createReadStream(__dirname + `/noprefix/anlon.gif`)
            }
    if (event.body.toLowerCase() == "việt óc"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Bot ngu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bot rác"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bot lồn"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bot ngu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
/*module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
}*/
	
module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "noprefix thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "noprefix success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["noprefix"] == "undefined" || data["noprefix"] == true) data["noprefix"] = false;
  else data["noprefix"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["noprefix"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}