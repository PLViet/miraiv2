module.exports.config={
	name:"fixspam",
	version:"1.0.0",
	hasPermssion:2,
	credits:"ManhG",
	description:"Người chửi bot sẽ tự động bị ban khỏi hệ thống <3",
	commandCategory:"noprefix",
	usages:"",
	cooldowns:0,
	denpendencies:{}
	
},
	module.exports.handleReply=async function({api:e,args:a,Users:n,event:t,handleReply:o}){const{threadID:s,messageID:d}=t,{reason:i}=o;
	var b=await n.getNameUser(t.senderID),l=t.body.split(" "),g=o.author,r=o.nameU;switch(o.type){case"reply":var h=global.config.ADMINBOT;for(let a of h)e.sendMessage({body:"Lời chăng chối từ "+b+":\n "+t.body,mentions:[{id:t.senderID,tag:b}]},a,((e,a)=>global.client.handleReply.push({name:this.config.name,messageID:a.messageID,messID:t.messageID,author:t.senderID,id:t.threadID,nameU:b,type:"banU"})));
	break;case"banU":if("unban"!=l[0]&&"Unban"!=l[0]&&"gỡ ban"!=l[0]&&"Gỡ ban"!=l[0]&&"Đã gỡ ban"!=l[0]&&"đã gỡ ban"!=l[0]){e.sendMessage({body:`Admin thông tin đến bạn:\n\n${t.body}\n\n»»💬Reply tin nhắn này để gửi trả lời của bạn`,mentions:[{tag:b,id:t.senderID}]},o.id,((e,a)=>global.client.handleReply.push({name:this.config.name,author:t.senderID,messageID:a.messageID,type:"reply"})),o.messID);break}{let a=(await n.getData(g)).data||{};
	a.banned=0,a.reason=null,a.dateAdded=null,await n.setData(g,{data:a}),global.data.userBanned.delete(g,1),e.sendMessage(`»Thông báo từ Admin ${b}«\n\n ${r}\n- Bạn Đã Được Gỡ Ban\n- Có thể sử dụng bot ngay bây giờ`,g,(()=>e.sendMessage(`${global.data.botID}`,(()=>e.sendMessage(`★★UnBanSuccess★★\n\n🔷${r} \n🔰TID:${g} `,s)))))}case"chuibot":e.sendMessage({body:`Admin thông tin đến bạn:\n\n${t.body}\n\n»»💬Reply tin nhắn này để nói lời chăng chối của bạn tới admin`,mentions:[{tag:b,id:t.senderID}]},o.id,((e,a)=>global.client.handleReply.push({name:this.config.name,author:t.senderID,messageID:a.messageID,type:"reply"})),o.messID)}},module.exports.handleEvent=async({event:e,api:a,Users:n,Threads:t})=>{var{threadID:o,messageID:s,body:d,senderID:i,reason:b}=e;const l=require("moment-timezone").tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");var{threadID:o,messageID:s,body:d,senderID:i}=e;const g=global.data.threadData.get(o)||{};if(void 0!==g.fixspam&&0==g.fixspam)return;if(i==global.data.botID)return;let r=await n.getNameUser(e.senderID);var h=e.threadID,m=(await t.getData(o)).threadInfo,c={body:`» Thông báo từ Admin «\n\n${r}, Bạn thật ngu ngok khi chửi bot vì vậy bot đã tự động ban bạn khỏi hệ thống\n\n💌Sử dụng callad để gỡ ban(kèm uid)`};["botngu","bot ngu","bot gà","con bot lol","bot ngu lol","bot chó","dm bot","đm bot","dmm bot","dmm bot","đmm bot","đb bot","bot điên","bot dở","bot khùng","đĩ bot","bot paylac rồi","con bot lòn","cmm bot","clap bot","bot ncc","bot oc","bot óc","bot óc chó","cc bot","bot tiki","lozz bottt","lol bot","loz bot","lồn bot","bot lồn","bot lon","bot cac","bot nhu lon","bot như cc","bot như bìu","bot sida","bot fake","mạnh ngu","bot shoppee","bot đểu","bot dỡm"].forEach((t=>{let b=t[0].toUpperCase()+t.slice(1);if(d===t.toUpperCase()|d===t|b===d){const d=e.senderID;modules="chui bot:",console.log(r,modules,t);const b=n.getData(d).data||{};
	n.setData(d,{data:b}),b.banned=1,b.reason=t||null,b.dateAdded=l,global.data.userBanned.set(d,{reason:b.reason,dateAdded:b.dateAdded}),a.sendMessage(c,o,(()=>{var e=global.config.ADMINBOT;for(var n of e){let e=m.threadName;a.sendMessage(`=== Bot Notification ===\n\n🆘Tội nhân: ${r}\n🔰Uid: ${d}\n🤷‍♂️Box: ${e}\n😥Chửi bot: ${t}\n\nĐã bị ban khỏi hệ thống`,n,((e,a)=>global.client.handleReply.push({name:this.config.name,author:i,messageID:a.messageID,messID:s,id:h,type:"chuibot"})))}}))}}))},
	module.exports.languages={
		vi:{
			on:"Bật",
			off:"Tắt",
			successText:"fixspam nhóm này thành công"
	},
			
			en:{
				on:"on",
				off:"off",
			successText:"fixspam success!"}
	},
		module.exports.run=async function({api:e,event:a,Threads:n,getText:t}){
			const{threadID:o,messageID:s}=a;
			let d=(await n.getData(o)).data;return void 0===d.fixspam||1==d.fixspam?d.fixspam=!1:d.fixspam=!0,await n.setData(o,{data:d}),
			global.data.threadData.set(o,d),
			e.sendMessage(`${0==d.fixspam?t("off"):t("on")} ${t("successText")}`,o,s)};
