const fs = require("fs");
module.exports.config = {
    name: "CT phá vỡ hạnh phúc",
	version: "1.0.1",
	description: "no prefix",
	commandCategory: "CT hài hài hước nhất năm",
	usages: "",
	cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ctphavohanhphuc.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241220452_4494358473918388_7208611001898183969_n.mp4/video-1630924545.mp4?_nc_cat=105&ccb=1-5&_nc_sid=060d78&_nc_ohc=lv6qquXeIxQAX-FOOZo&vabr=306346&_nc_ht=video.xx&oh=a138e8202a6f44486095370af2ebe2b5&oe=61371512&dl=1 ").pipe(fs.createWriteStream(dirMaterial + "ctphavohanhphuc.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("hạnh phúc")==0) || (event.body.indexOf("phá vỡ hạnh phúc")==0) || (event.body.indexOf("CT hài hước")==0)) {
		var msg = {
				body: "1 chương trình rất hay và ý nghĩa cho giới trẻ",
		attachment: fs.createReadStream(__dirname + `/ctphavohanhphuc.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}