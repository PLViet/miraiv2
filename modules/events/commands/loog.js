module.exports.config = {
  name: "log",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "manhG",
  description: "log",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 3,
  denpendencies: {
  }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  //var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var pingadmin = data.pingadmin;
  var alobotoi = data.alobotoi;
  var goibot = data.goibot;
  var tagadmin = data.tagadmin;
  var autoban = data.autoban;
  var hi = data.hi;
  var goiadmin = data.goiadmin;
  var banspam = data.banspam;
  //prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `true` : log = `${log}`;
  rankup == null ? rankup = `false` : rankup = `${rankup}`;
  resend == null ? resend = `false` : resend = `${resend}`;
  pingadmin == null ? pingadmin = `true` : pingadmin = `${pingadmin}`;
  alobotoi == null ? alobotoi = `true` : alobotoi = `${alobotoi}`;
  goibot == null ? goibot = `true` : goibot = `${goibot}`;
  tagadmin == null ? tagadmin = `true` : tagadmin = `${tagadmin}`;
  autoban == null ? autoban = `true` : autoban = `${autoban}`;
  hi == null ? hi = `true` : hi = `${hi}`;
  goiadmin == null ? goiadmin = `true` : goiadmin = `${goiadmin}`;
  banspam == null ? banspam = `true` : banspam = `${banspam}`;
return api.sendMessage(`❯💛 💚 💙 💜 log: ${log}\n❯💗 💖 💘 💝 rankup: ${rankup}\n❯❣ 💕 💞 💓 resend: ${resend}\n❯🍇 🍓  🍑 pingadmin: ${pingadmin}\n❯💗 💓 💔 💟 alobotoi: ${alobotoi}\n❯ 💚 💛 💜 💕  goibot: ${goibot}\n❯💕 💖 ❣️ 💘 tagadmin: ${tagadmin}\n❯💖 ❣️ 💘 💝 autoban: ${autoban}\n❯❤ ❥ ❣ ❦ hi: ${hi}\n❯🍁🍁🍁 goiadmin: ${goiadmin}\n❯ 💗 ❤️‍🔥 ❤️‍ ♥ banspam: ${banspam}`, threadID, messageID);
}