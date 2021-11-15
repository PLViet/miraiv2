const fs = require("fs");
module.exports.config = {
	name: "Xách balo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "BraSL fix", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Không cần dấu lệnh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("xách ba lô và đi")==0 || (event.body.indexOf("xách ba lô")==0)) {
		var msg = {
				body: "xách balo đi bụi :>",
				attachment: fs.createReadStream(__dirname + `/cache/xachbalo.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}