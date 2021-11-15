module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};

 
 module.exports.handleEvent = async function ( { api, event } ) {
    var idad = ["100012371343281","100073280626414"];
    for (const id of idad) {
    if (!id) return
    if (!idad) return
    if(!event.body) return
    if (Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin có gì ko?","Sao?? Làm ơn nhắn qua mess hoặc zalo để liên hệ ông chủ!!","Sao gọi chủ tôi có việc gì?","Hiện ông chủ tôi đang bận hãy sử dụng callad để liên hệ","Hãy dùng lệnh #ad để biết thông tin liên hệ chủ tôi","Tag lần nữa xem","Tag làm gì?","Sao? Tag có việc gì?","Thích tag ko :)","Tag gì lắm vậy? Bộ ko cho chủ kao xin phút gây bình yên à?","Sao tag có việc gì ngồi xuống uống tách trà tâm sự","Hãy dùng callad để liên hệ với admin >,<","Đây là trang web thông tin của admin","Tag Admin lần nữa bố ban khỏi dùng","Tag Admin lần nữa bot thọc cho đấy","Đã bảo đừng tag Admin mà, thích ăn đấm hả😠","Vcl tag Admin hoài z 😏"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    else return
    }
}
module.exports.run = async function ( { api, event } ) 
api.sendMessage(`Tự động trả lời khi tag admin`,event.threadID,event.messageID)
}
 
 
 
 
/*module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "gọi admin thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "gọi admin success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["goiadmin"] == "undefined" || data["goiadmin"] == true) data["goiadmin"] = false;
  else data["goiadmin"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["goiadmin"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}*/