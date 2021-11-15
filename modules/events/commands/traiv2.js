module.exports.config = {
	name:"traiv2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HTHB",
	description: "ảnh trai ngon :))",
	commandCategory: "system",
	cooldowns: 3
};
/*function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}*/
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
	axios.get('https://img-hololive-api.up.railway.app/rushia/').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `Ảnh trai xinh nhất ..... :)`,
						attachment: fs.createReadStream(__dirname + `/noprefix/trai/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/noprefix/trai/anh.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/noprefix/trai/anh.${ext}`)).on("close", callback);
			})
}