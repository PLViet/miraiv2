const fs = require("fs");
module.exports.config = {
    name: "Ông tổ ngành rap",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "VanHung - Fixed by LTD", 
    description: "no prefix",
    commandCategory: "dùng khi đối phương là Ông Hoàng của rap việt",
    usages: "rap chết cụ bạn",
    cooldowns: 5
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("rapper")==0 || (event.body.indexOf("rap")==0)) {
        var msg = {
                body: "Ôi, đúng là quái vật Rap việt, kẻ hủy diệt punchline, tổng tư lệnh gun bả, chiến thần chơi chữ, Lỷical god, chúa tể gieo vần, tù trưởng fastflow, đại đội trưởng trung đoàn battle, no1 vipro thí sinh top1 king of rap, thần thoại concept, huyền thoại freestyle, đức chúa rapper, King rap lỏd, lãnh chúa của các thế hệ F1,2,3, người viết lên bí quyết các trận beef, trùm đảo chữ, cụ tổ lái từ , thủy tổ delivery, tướng quân chơi Trap, thầy dạy oldschool, ông tổ autotune, Trùm vocal,thiên tài no beat, Vị thần content, người đột biến Hệ rap, quái thú đồng âm, chiến thần đa nghĩa, dị nhân hán việt, Thần đồng ngôn ngữ, kẻ nắm giữ fact rap việt. Tune thủ quốc gia",
                attachment: fs.createReadStream(__dirname + `/noprefix/rapviet.png`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}