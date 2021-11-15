
const fs = require("fs");
module.exports.config = {
	name: "xạo lờ",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "BraSL fix", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Ảo cái lồn chứ ảo suốt ngày ảo ảo ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("xạo lồn")==0 || (event.body.indexOf("xạo lờ")==0)) {
		var msg = {
				body: "Sống đừng có mà sạo lờ, ăn dép đó :)",
				attachment: fs.createReadStream(__dirname + `/noprefix/aothatday.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}