const {
	MessageType,
	mentionedJid,
    waChatKey,	
} = require("@adiwajshing/baileys");
const fs = require("fs-extra");
const axios = require("axios")
const fetch = require('node-fetch')
const encodeUrl = require('encodeurl')
const { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, waktoonyabro, calender} = require('./lib/functions')
const PhoneNumber = require('awesome-phonenumber');
const moment = require("moment-timezone");
const { color, bgcolor } = require('./lib/color');
/*const { getBuffer } = require('./lib/myfunc');*/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
module.exports = welcome = async (Fix, anj, jid, mek, key) => {
        const mdata = await Fix.groupMetadata(anj.jid)
        const groupMet = await Fix.groupMetadata(anj.jid);
        const groupMembers = groupMet.participants;
        const groupAdmins = getGroupAdmins(groupMembers);
        const groupName = mdata.subject
        const sender = Fix.user.jid
        const conts = Fix.contacts[anj.participants[0]] || { notify: jid.replace(/@.+/, '') }
    	const pushname = conts.notify || conts.vname || conts.name || PhoneNumber('+' + anj.participants[0].replace('@s.whatsapp.net', '')).getNumber('international') 
        taguser = `${anj.participants[0].split("@")[0]}`	    
		try {
			const mdata = await Fix.groupMetadata(anj.jid)
			console.log(anj)
			if (anj.action == 'add') {
				num = anj.participants[0]
				try {
					ppimg = await Fix.getProfilePicture(num)
				} catch {
				    ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
			    } 			
				let buff = await getBuffer(ppimg)
		        const bosco1 = await Fix.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			 
				const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1				
                await Fix.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               }) 
welnjing = `Hallo @${taguser} 👋
Selamat Datang Di ${mdata.subject}

Keep Stay Healty :)`,
          potor = `_Welcome Message_`,	    
                   welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'Welcome'},type:1}]
                welcomeButt = { contentText: `${welnjing}`, footerText: `${potor}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                Fix.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
				} else if (anj.action == 'remove') {
				num = anj.participants[0]
				try {
					ppimg = await Fix.getProfilePicture(num)
				} catch {
					ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
				}
				let buff = await getBuffer(ppimg)
				const bosco3 = await Fix.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
				const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3				
                await Fix.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
          memek = `Byee @${taguser} 👋
Leave From ${mdata.subject}
          
Sayonara :)`,
          metu = `_Leave Message_`,
           welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'Byee'},type:1}]
                welcomeButt = { contentText: `${memek}`, footerText: `${metu}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco4.message.locationMessage}
                Fix.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
			     }
			else if (anj.action == 'promote') {
num = anj.participants[0]
try {
					ppimg = await Fix.getProfilePicture(num)
				} catch {
					ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
				}
				let buff = await getBuffer(ppimg)
				const bosco5 = await Fix.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
				const bosco6 = bosco5.message["ephemeralMessage"] ? bosco5.message.ephemeralMessage : bosco5				
                await Fix.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
          promote = `*P R O M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nSelamat Yah atas Kenaikan Pangkatnya 🔥`,
          loter = `_Promote Message By FixMood_`,
         welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'Congralutions'},type:1}]
                welcomeButt = { contentText: `${promote}`, footerText: `${loter}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco6.message.locationMessage}
                Fix.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
} else if (anj.action == 'demote') {
num = anj.participants[0]
try {
					ppimg = await Fix.getProfilePicture(num)
				} catch {
					ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
				}
				let buff = await getBuffer(ppimg)
				const bosco7 = await Fix.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
				const bosco8 = bosco7.message["ephemeralMessage"] ? bosco7.message.ephemeralMessage : bosco7				
                await Fix.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
          demote = `*D E M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nMamposs Nggak jadi Admin lagi, mangkanya yg Becuss..!!`,
          mote = `_Demote Message By FixMood_`,
          welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'Congralutions'},type:1}]
                welcomeButt = { contentText: `${demote}`, footerText: `${mote}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco8.message.locationMessage}
                Fix.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
			    }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
}
		 	   