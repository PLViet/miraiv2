const fs = require("fs");
module.exports.config = {
    name: "dieutra",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "BraSL",
    description: "noprefix",
    commandCategory: "Không cần dấu lệnh",
    usages: "chat điều tra or FPI tới",
    cooldowns: 5
};


module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("điều tra")==0 || (event.body.indexOf("FPI tới")==0)) {
        var msg = {
                body: "Nhóm này đã bị điều tra bởi các cơ quan trực thuộc Bộ Công an (và/hoặc các tổ chức chính trị tương tự phục vụ cho nhà nước CHXHCNVN). Cơ quan điều tra (CQĐT) khẳng định các thành viên trong này liên quan tới nhóm hoặc những cá nhân khác trong đây. CQĐT biết rõ tại sao các thành viên lại có mặt ở đây vào thời điểm này, tài khoản của họ không được thêm bởi một bên thứ ba mà chính họ tự tham gia vào đây. Các nhân viên của CQĐT cũng xin khẳng định rằng những hành động chống phá Đảng và Nhà nước đã được thực hiện bởi các thành viên trong nhóm này. Nhà nước CHXHCNVN cũng không quên khẳng định quyết tâm chiến thắng đại dịch Covid-19, nhấn mạnh chủ quyền không thể tranh cãi với quần đảo Hoàng Sa và Trường Sa, cũng như tính chính nghĩa của cuộc chiến giải phóng người dân Campuchia khỏi thảm họa diệt chủng Khmer Đỏ.",
                 attachment: fs.createReadStream(__dirname + `/noprefix/FPI.png`)
		   }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}
