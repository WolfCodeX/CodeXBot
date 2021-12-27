//<!------ Base By Hexagonz --------!>
//<!------ Script Ori By FixMoodX ( me ) -------!>
//<!------ Thanks To ------!>

/* <! Hexagonz !>
  <! FixMoodX !>
  <! Marcel !>
  <! Mail Bot !>
  <! Zerobot !>
  <! All My Friends !>
  <! All Creator Bot !>
  <! Penyedia Apikey !>
*/

//<!------ 100% Full No Enc Kecuali start.js Yaa !! -----!>

const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime
} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fsx = require("fs-extra")

const axios = require("axios")

const ffmpeg = require('fluent-ffmpeg')

const { EmojiAPI } = require("emoji-api");

const tik = require('tiktok-scraper-without-watermark')

const ig = require('insta-fetcher')

const hx = require('hxz-api')

const emoji = new EmojiAPI()

const requests = require("node-fetch")

const fetch = require('node-fetch');

const crypto = require('crypto')

const Fb = require('fb-video-downloader');

const twitterGetUrl = require("twitter-url-direct")

const phoneNum = require('awesome-phonenumber')

const gis = require('g-i-s');

const got = require("got");

const imageToBase64 = require('image-to-base64');

const ID3Writer = require('browser-id3-writer');		

const brainly = require('brainly-scraper')

const yts = require( 'yt-search')

const ms = require('parse-ms')

const toMs = require('ms')

const util = require('util')

const os = require('os');

const ggs = require('google-it')
const { error } = require("qrcode-terminal")

const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')

const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')

const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { TiktokDownloader } = require("./lib/gif.js")

const { y2mateA, y2mateV } = require('./lib/y2mate')

const { webp2mp4File} = require('./lib/webp2mp4')

const { pinterest } = require('./lib/pinterest.js')
const { mediafiredl } = require('./lib/mediafiredl')
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs")
const {
readFileSync: read,
writeFileSync: write,
createWriteStream: create,
unlinkSync: unlink,
existsSync: exists
}= require('fs');
const { menu } = require('./message/menu')
const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";

//<!------- Sticker Wm -------!>
const Exif = require('./lib/exif');

const exif = new Exif();

//<!------ Database ------!>
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const antiviewonce = JSON.parse(fs.readFileSync('./database/antiviewonce.json'));
const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'));

const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'));

const pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));

//<!------ Setting ------!>
owner = '62857785356307'
namaown = '𝘐𝘮 𝘞𝘰𝘭𝘧𝘊𝘰𝘥𝘦𝘟'
namabot = 'CodeX - Bot'
fake = 'CodeX - Bot'
footer = `CodeX - Team`
wa = '0'
ownerNumber = ["62857785356307@s.whatsapp.net"]
ownerNumbers = ["62857785356307@s.whatsapp.net","6285158342254@s.whatsapp.net","62857785356307@s.whatsapp.net"]

//<!------ Setting Image ------!>
const thumb = fs.readFileSync('./media/thumb.jpg')
const fotofake = fs.readFileSync('./media/fake.jpg')
const keren = fs.readFileSync('./media/keren.jpg')

//<!------ Setting Bot ------!>
banChats = true
multi = true
nopref = false
offline = false
bugc = true
readG = false
readP = false
vn = false
ngetik = false
antitrol = false
offline = false
model = 'location'
modelall = 'location'
waktu = '-'
alasan = '-'
t = '```'
gcount = '100'
var kuis = false

hit_today = []

ky_ttt = []

tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//<!------ Set CMD ------!>
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//<!------ Module Export ------!>
module.exports = hydra = async (hydra, mek) => {
 try {
 if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
        if (bugc === false) return
        if (mek.key.fromMe) return
        nums = mek.participant
        longkapnye = "\n".repeat(600)
        tekuss = `${longkapnye}\`\`\`B U G G C T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} Telah Mengirimkan Buggc, Mampus Lu Anjing Bakal Dikick`
        hydra.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { freply(`*ERR:* ${e}`) })
        hydra.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
        hydra.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}
        global.blocked
        m = simple.smsg(hydra, mek)
      	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format("HH:mm:ss");
		const timeWita = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeWit = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        if (vn) {
		hydra.updatePresence(from, Presence.recording)
		} else if (ngetik) {
		hydra.updatePresence(from, Presence.composing)
		}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
      	budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()	
		const args = body.trim().split(/ +/).slice(1)
		const arg = body.substring(body.indexOf(' ') + 1)
		const isCmd = body.startsWith(prefix)
    	const q = args.join(' ')
        const c = args.join(' ')
        const timestamp = speed();
        const latensi = speed() - timestamp
		const run = process.uptime()
		const botNumber = hydra.user.jid
		const botNumberss = hydra.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0]
        const isOwner = ownerNumbers.includes(sender)
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = hydra.user.phone
		const totalchat = await hydra.chats.all()
		const totalgroup = await hydra.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await hydra.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        const jumlahUser = pendaftar.length
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`	    
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
	    const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
        const isUser = pendaftar.includes(sender)
        hit_today.push(command)
		const groupMetadata = isGroup ? await hydra.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const mentionsss = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? hydra.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hydra.sendMessage(from, teks.trim(), extendedText, { quoted: fgif, contextInfo: { "mentionedJid": memberr } })}	
        const conts = mek.key.fromMe ? hydra.user.jid : hydra.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hydra.user.name : conts.notify || conts.vname || conts.name || '-'        
        
        //<!------ ------!>
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false	
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiVO = isGroup ? antiviewonce.includes(from) : false
		
        const atibot = m.isBaileys
        idttt = []
   	    players1 = []
   	    players2 = []
   	    gilir = []
   	    for (let t of ky_ttt){
   	    idttt.push(t.id)
   	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
        const isTTT = isGroup ? idttt.includes(from) : false
        isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        try {
		pporang = await wanz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'	
		      }
		const pporg = await getBuffer(pporang)
		
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''         
        const mess = {
                  "wait": "⏳𝑪𝒐𝒕𝒕𝒐 𝑨 𝑴𝒊𝒏𝒖𝒕𝒆...",
                  "success": "𝑫𝒐𝒏𝒆 !",
                  "badmin": "𝑱𝒂𝒅𝒊𝒌𝒂𝒏 𝑩𝒐𝒕 𝑺𝒆𝒃𝒂𝒈𝒂𝒊 𝑨𝒅𝒎𝒊𝒏!",
                  "wrongFormat": "𝑭𝒐𝒓𝒎𝒂𝒕 𝑻𝒊𝒅𝒂𝒌 𝑩𝒆𝒏𝒂𝒓/ 𝑺𝒂𝒍𝒂𝒉!",
            "error": {
                  "stick": "𝑰𝒕𝒖 𝑩𝒖𝒌𝒂𝒏 𝑺𝒕𝒊𝒄𝒌𝒆𝒓 𝑩𝒂𝒏𝒈!",
                  "lv": "~𝑬𝒓𝒓𝒐𝒓",
                  "api": "~ 𝑬𝒓𝒓𝒐𝒓 𝑴𝒖𝒏𝒈𝒌𝒊𝒏 𝑨𝒑𝒊𝑵𝒚𝒂 𝑴𝒂𝒕𝒊"
               },
            "only": {
                  " owner": "𝑳𝒖 𝑮𝒐𝒐𝒅𝒍𝒐𝒐𝒌𝒊𝒏𝒈?",
                  "admin": "𝑳𝒖 𝑨𝒅𝒎𝒊𝒏?",
                  "group": "𝑮𝒓𝒐𝒖𝒑 𝑶𝒏𝒍𝒚!",
                  "prem": "𝑷𝒓𝒆𝒎𝒊𝒖𝒎 𝑶𝒏𝒍𝒚! 𝑴𝒂𝒌𝒂𝒏𝒏𝒚𝒂 𝑩𝒆𝒍𝒊 𝑷𝒓𝒆𝒎",
                  "pribadi": "𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑪𝒉𝒂𝒕 𝑨𝒋𝒂 𝑺𝒂𝒚𝒂𝒏𝒈!",
               }
         }

         const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        
        const simir = (teks) => {
			hydra.sendMessage(from, teks, text, { quoted:mek })
		}

        const reply = (teks) => {
            hydra.sendMessage(from, teks, text, {quoted:mek})
        }
        
        const freply = (teks) => {
            hydra.sendMessage(from, teks, text, {quoted:mek, contextInfo:{ "mentionedJid": [sender], "externalAdReply":{"title": fake,"body": `${time2} Wib\n${week} ${calender}`,"previewType": "PHOTO","thumbnailUrl": `fotofake`,"thumbnail": fotofake}}})
        }
        
        const sendMess = (hehe, teks) => {
            hydra.sendMessage(hehe, teks, text)
        }
         
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hydra.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hydra.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendImage = (teks) => {
				hydra.sendMessage(from, teks, image, { quoted: mek })
			}
			//<!--------- Fake Fakean --------!>
			const fakestatus = (teks) => {
            hydra.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                           "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                           "mimetype": "image/jpeg",
                           "caption": fake,
                           "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                           "fileLength": "28777",
                           "height": 1080,
                           "width": 1079,
                           "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                           "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                           "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                           "mediaKeyTimestamp": "1610993486",
                           "jpegThumbnail": fotofake,
                           "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: { "mentionedJid": [sender], "forwardingScore":999,"isForwarded":false},sendEphemeral: true
            })
        }
        const katalog = (teks) => {
             res = hydra.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 11, "message": teks, "footerText": `${fake}`, "thumbnail": fotofake, "surface": 'CATALOG' }}, {quoted:ftroli})
             hydra.relayWAMessage(res)}
             
        const fakeitem = (teks) => {
           hydra.sendMessage(from, teks, text, { contextInfo: {
                          "forwardingScore": 999,"isForwarded": false, sendEphemeral: true,                
                          "externalAdReply": {
                          "title": `CodeXBot\nPowered By FixMood`,
                          "body": '',
                          "previewType": "PHOTO",
                          "thumbnail": fotofake,             
                          }, mentionedJid:[sender]}, quoted : mek})}    
             const fakevn = {
	         key: { 
             fromMe: false,
	         participant: `0@s.whatsapp.net`, ...(from ? 
	         { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
             },
	         message: { 
       	   	"audioMessage": {
            "mimetype":"audio/ogg; codecs=opus",
            "seconds": "99999999999",
            "ptt": "true"
            }
	            } 
            }
            //FAKE TOKO
            const ftoko = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fotofake},"title": `${fake}`,"description": `${fake}`, "currencyCode": "IDR","priceAmount1000": "11","retailerId": `${fake}`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE STICKER
            const fsticker = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Avh0ky245dDhBO3NkVziYCn2GhPGRzrFF8SG9DPTN1tZ.enc","fileSha256": "5yexrJWy1WtvUSVjfK5SG6wGKx3RrzrPDsdo0EJnQGU=","fileEncSha256": "Dlj1QjI62bcp9eMeB25jSPOA138lbR077+d0lcFPLd8=","mediaKey": "XWbEEmZzOGFTWFn/oJH0u8YS2qHHNTwXBTM0u8rOxgc=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/11887386_272421308129902_7014734343514766929_n.enc?ccb=11-4&oh=8b65a9e2f581f5940c7e55f3b81b2450&oe=61A0E4FD","fileLength": "6540","mediaKeyTimestamp": "1635374706","isAnimated": false}}} 
            //FAKE VN
            const fvn = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fotofake}}}
            // FAKE LOKASI
            const floc2 = {
            key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`> ${command} > Button`,}}}
            //FAKEREPLY VIDEO
            const fvideo = {
            key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${fake}`,"h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fotofake}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
            key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fotofake}}}
            //FAKEREPLY GIF
            const fgif = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fotofake}}} 
  	        // Reply Fake Kontak
  	        const fkontak = { 
	        key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${fake}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${fake},;;;\nFN:${fake},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fotofake, thumbnail: fotofake,sendEphemeral: true}}}                                                                                                                                                                                                                                                                                                                                                        
            // Reply Fake Gc Link
            const fgclink = { 
            key: { participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}\n✓ 𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝑬𝒙𝒄 : ${command}`, 'jpegThumbnail': fotofake}}}                                                               
            // Reply Fake Troli
            const ftroli = {     
            key: { fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "status@broadcast"  }, "message": {orderMessage: {itemCount: 555,status: 200, thumbnail: fotofake, surface: 200, message: `${fake}\n𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐄𝐱𝐜 : ${command}`, orderTitle: 'FixMood XD', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":false},sendEphemeral: true}        
            
            // Send But Message
            const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
            const buttonMessage = {
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 1
            }
            hydra.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
            }
     // Nge Eval Terus Gw Sempurnain 
     const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
     kma = gam1
     mhan = await hydra.prepareMessage(from, kma, image)
     const buttonMessages = {
     imageMessage: mhan.message.imageMessage,
     contentText: text1,
     footerText: desc1,
     buttons: but,
     headerType: 4
     }
     hydra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
     }  
     // Pahamin dari function sendbutimage terus ini cuman gw bedain type 
     const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
     kma = vid1
     mhan = await hydra.prepareMessage(from, kma, video)
     const buttonMessages = {
     videoMessage: mhan.message.videoMessage,
     contentText: text1,
     footerText: desc1,
     buttons: but,
     headerType: 5
     }
     hydra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
     }         	
     // Button Loc
     const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
     kma = gam1
     kntl = await hydra.prepareMessage(from, kma, location)
     const buttonMessages = {
     locationMessage: kntl.message.locationMessage,
     contentText: text1,
     footerText: desc1,
     buttons: but,
     headerType: 6
     }
     hydra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
     }
     
     //Function Afk
     cekafk(afk)
     if (!mek.key.remoteJid.endsWith('@g.us') && offline){
     if (!mek.key.fromMe){
     if (isAfk(mek.key.remoteJid)) return
     addafk(mek.key.remoteJid)
     heheh = ms(Date.now() - waktu) 
     hydra.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fotofake}}}})}}   
     if (mek.key.remoteJid.endsWith('@g.us') && offline) {
     if (!mek.key.fromMe){
     if (mek.message.extendedTextMessage != undefined){
     if (mek.message.extendedTextMessage.contextInfo != undefined){
     if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
     for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
     if (ment === `${owner}@s.whatsapp.net`){
     if (isAfk(mek.key.remoteJid)) return
     addafk(mek.key.remoteJid)
     heheh = ms(Date.now() - waktu)
     hydra.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fotofake}}}})}}}}
     }
     }
     } 
     
     const sendStickerFromUrl = async(to, url) => {           	
      var names = Date.now() / 10000;           	
      var download = function (uri, filename, callback) {			
      request.head(uri, function (err, res, body) {			   
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);			
      });           	
      };           	
      download(url, './sticker' + names + '.png', async function () {			
      console.log('selesai');			
      let filess = './sticker' + names + '.png'			
      let asw = './sticker' + names + '.webp'           	   
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {			  
      let media = fs.readFileSync(asw)			   
      hydra.sendMessage(to, media, MessageType.sticker,{quoted:mek})			   
      fs.unlinkSync(filess)			   
      fs.unlinkSync(asw)			
      });           	
      });			
      }    
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
        const fn = Date.now() / 10000;		    
        const filename = fn.toString()	     	
        let mime = ""		    
        var download = function (uri, filename, callback) {		   
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);		   
        });		   
        };		    
        download(url, filename, async function () {		    
        console.log('done');		    
        let media = fs.readFileSync(filename)		    
        let type = mime.split("/")[0]+"Message"		    
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif		    
        }		    
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio		    
        }		    
       hydra.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})		    		    
        fs.unlinkSync(filename)		    
        });	       
        }
        const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       hydra.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       hydra.sendMessage(from, hasil, type, options).catch(e => {
	       hydra.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
       const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
hydra.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
hydra.sendMessage(from, hasil, type, options).catch(e => {
hydra.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}

    //Function Exif
     function addMetadata(packname, author) {
     if (!packname) packname = 'Jangan Di Ambil';
     if (!author) author = 'Punya Saya';
     author = author.replace(/[^a-zA-Z0-9]/g, '');
     let name = `${author}_${packname}`
     if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
     const json = {
     "sticker-pack-name": packname,
     "sticker-pack-publisher": author,
     }
     const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
     const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
     let len = JSON.stringify(json).length
     let last
     if (len > 256) {
     len = len - 256
     bytes.unshift(0x01)
     } else {
     bytes.unshift(0x00)
     }
     if (len < 16) {
     last = len.toString(16)
     last = "0" + len
     } else {
     last = len.toString(16)
     }
     const buf2 = Buffer.from(last, "hex")
     const buf3 = Buffer.from(bytes)
     const buf4 = Buffer.from(JSON.stringify(json))
     const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
     fs.writeFile(`./${name}.exif`, buffer, (err) => {
     return `./${name}.exif`		
     })	
     }
     const sendStickerUrl = async(to, url) => {			
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))           	
      var names = getRandom('.webp')           	
      var namea = getRandom('.png')           	
      var download = function (uri, filename, callback) {           	
      request.head(uri, function (err, res, body) {           		
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);           	
      });           	
      };           	
      download(url, namea, async function () {           	
      let filess = namea           	
      let asw = names           	
      require('./lib/exif.js')           	
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {           	
      exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {           	
      let media = fs.readFileSync(asw)           	
      hydra.sendMessage(to, media, sticker,{quoted : mek})           	
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
      });           	
      });           	
      });			
      }        
      
//<!------ Ucapan Waktu -----!>
     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
     if(time2 < "23:59:00"){
     var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
                                        }
     if(time2 < "19:00:00"){
     var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠'
                                         }
     if(time2 < "18:00:00"){
     var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
                                         }
     if(time2 < "15:00:00"){
     var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
                                         }
     if(time2 < "11:00:00"){
     var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
                                         }
     if(time2 < "05:00:00"){
     var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐃𝐢𝐧𝐢 𝐇𝐚𝐫𝐢'
                                         }    
                                                                                 
//<!----- Ucapan Waktu 2 -----!>
     var ase = new Date();
     var waktoo = ase.getHours();
     switch(waktoo){
     case 0: waktoo = "Waktu Tengah Malam🌚\n - Tidur Kak :)"; break;
     case 1: waktoo = "Waktu Tengah Malam🌚\n - Tidur Kak :)"; break;
     case 2: waktoo = "Waktu Dini Hari🌒\n - Tidur Kak :)"; break;
     case 3: waktoo = "Waktu Dini Hari🌓\n - Tidur Kak :)"; break;
     case 4: waktoo = "Selamat Subuh🌔\n - Sholat Subuh Kak :)"; break;
     case 5: waktoo = "Selamat Subuh🌔\n - Sholat Subuh Kak :)"; break;
     case 6: waktoo = "Selamat Pagi kak🌝🌝"; break;
     case 7: waktoo = "Selamat Pagi kak🌝🌝"; break;
     case 8: waktoo = "Selamat Pagi kak🌝🌝"; break;
     case 9: waktoo = "Selamat Pagi kak🌝"; break;
     case 10: waktoo = "Selamat Pagi kak🌝"; break;
     case 11: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
     case 12: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
     case 13: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
     case 14: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Beristirahat :)"; break;
     case 15: waktoo = "Selamat Sore Kak🌝\n -  Jangan Lupa Mandi Dan shalat ashar"; break;
     case 16: waktoo = "Selamat Sore Kak🌝\n - Jangan Lupa Mandi Dan shalat ashar"; break;
     case 17: waktoo = "Selamat Sore Kak🌖\n - Menjelang Malam🌚"; break;
     case 18: waktoo = "Waktu Magrib🌘\n - Jangan Lupa Shalat Magrib Kak"; break;
     case 19: waktoo = "Waktu Magrib🌚"; break;
     case 20: waktoo = "Selamat Malam🌚"; break;
     case 21: waktoo = "Selamat Malam🌚"; break;
     case 22: waktoo = "Selamat Malam🌚\n - Jangan Lupa Beristirahat & Jangan Gadang"; break;
     case 23: waktoo = "Tengah Malam🌚 \n - Tidur Kak, Ga baik bergadang :)"; break;
     }
     var tampilHari = "" + waktoo; 
     
                  
   //Waktu Buat Fake Reply                   
     var ase = new Date();
     var waktoonyabro = ase.getHours();
     switch(waktoonyabro){
     case 0: waktoonyabro = `Selamat Malam 🌛`; break;
     case 1: waktoonyabro = `Selamat Malam 🌛`; break;
     case 2: waktoonyabro = `Selamat Malam 🌛`; break;
     case 3: waktoonyabro = `Selamat Pagi ✨`; break;
     case 4: waktoonyabro = `Selamat Pagi ✨`; break;
     case 5: waktoonyabro = `Selamat Pagi ✨`; break;
     case 6: waktoonyabro = `Selamat Pagi ✨`; break;
     case 7: waktoonyabro = `Selamat Pagi ✨`; break;
     case 8: waktoonyabro = `Selamat Pagi ✨`; break;
     case 9: waktoonyabro = `Selamat Pagi ✨`; break;
     case 10: waktoonyabro = `Selamat Pagi ✨`; break;
     case 11: waktoonyabro = `Selamat Siang 🔥`; break;
     case 12: waktoonyabro = `Selamat Siang 🔥`; break;
     case 13: waktoonyabro = `Selamat Siang 🔥`; break;
     case 14: waktoonyabro = `Selamat Siang 🔥`; break;
     case 15: waktoonyabro = `Selamat Sore 🌹`; break;
     case 16: waktoonyabro = `Selamat Sore 🌹`; break;
     case 17: waktoonyabro = `Selamat Sore 🌹`; break;
     case 18: waktoonyabro = `Selamat Malam 🌛`; break;
     case 19: waktoonyabro = `Selamat Malam 🌛`; break;
     case 20: waktoonyabro = `Selamat Malam 🌛`; break;
     case 21: waktoonyabro = `Selamat Malam 🌛`; break;
     case 22: waktoonyabro = `Selamat Malam 🌛`; break;
     case 23: waktoonyabro = `Selamat Malam 🌛`; break;
     }
     var YahahaHayyuk = "" + waktoonyabro; 
     const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
     let d = new Date
	 let locale = 'id'
     let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
	 const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
     const week = d.toLocaleDateString(locale, { weekday: 'long' })
  	 const calender = d.toLocaleDateString(locale, {
     day: 'numeric',
     month: 'long',
     year: 'numeric'
     }) 
                      
	 colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']	
     const isImage = (type === 'imageMessage')
     const isVideo = (type === 'videoMessage')
     const isSticker = (type == 'stickerMessage')
     const isList = (type == 'listResponseMessage')	 	 	    
	 const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	 const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	 const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	 const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
     const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
     const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
     const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
     const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
     const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
     const isQuotedProd = type === 'extendedTextMessage' && content.includes('productMessage')
     const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')           	                                                 
     
     //------[ Console Log ]------\\
	 if (!isGroup && !isCmd) console.log(color("[ CMD PRIVATE ]", "limegreen"), color(time, "yellow"), color(budy, "cyan"), color('from', 'white'), color(pushname, "limegreen"))
     if (isGroup && !isCmd) console.log(color("[ CMD GROUP ]", "limegreen"), color(time, "yellow"), color(budy, "cyan"), color('from', 'white'), color(pushname, "limegreen"), color('in', 'white'), color(groupName, "limegreen"))
     if (!isGroup && isCmd) console.log(color("[ CMD ]", "limegreen"), color(time, "yellow"), color(`${command} [${args.length}]`, 'limegreen'), color('from', 'white'), color(pushname, "limegreen"))
     if (isGroup && isCmd) console.log(color("[ CMD ]", "limegreen"), color(time, "yellow"), color(`${command} [${args.length}]`, 'limegreen'), color('from', 'white'), color(pushname, "limegreen"), color('in', 'white'), color(groupName, "limegreen"))
	   
   	 //-----------[ Self Public ]-----------\\
   	 if (!mek.key.fromMe && !isOwner && banChats === true) return		
 	 if (atibot === true) return	
 	 
 	 // Auto Read Gc 
 	 var chats = await hydra.chats.array.filter(v => v.jid.endsWith('g.us'))
     chats.map( async ({ jid }) => {
     if (readG === false) return
     await hydra.chatRead(jid)})     
     
    //Auto Read Pc
     var chatss = await hydra.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
     chatss.map( async ({ jid }) => {
     if (readP === false) return
     await hydra.chatRead(jid)})
     
     //User 
     if (isCmd && !isUser){
     pendaftar.push(sender)
     fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar))
     } 
                                                           
     //Antitroli
     if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
     if (antitrol === false) return
     if (mek.key.fromMe) return
     freply('Bjir Jangan Pake Faketroli Bro')
     await hydra.modifyChat(m.chat, '', {
     includeStarred: false
     })
     }
     // Antilink 
     if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
     if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
     freply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
     hydra.groupRemove(from, [sender])
           }
       }  
     
     //runtime berjalan
     runi = process.uptime() 
     hydra.setStatus(`${ucapanWaktu} | Github : WolfCodeX | Mode : ${banChats ? "Self - Mode" : "Public - Mode"} | Active : ${kyun(runi)}`).catch((_)=>_);
     settingstatus = new Date() * 1;
     
     switch (command) {

//<!------ Main Menu ------!>

case 'y':
if (model == 'location') {
menu1 = `Hai Kak @${sender.split('@')[0]} 👋

*_Info - Bot_*
🕊 _Owner : @${owner}_
🕊 _Type : Nodejs_
🕊 _Library : Baileys_
🕊 _Language : Javascript_
🕊 _Mode : ${banChats ? "Self - Mode" : "Public - Mode"}_
🕊 _Speed : ${latensi.toFixed(4)} Seccond_

*_Info - Time_*
🐼 _${timeWib} Wib_
🐼 _${timeWita} Wita_
🐼 _${timeWit} Wit_

*_Special Thanks To_*
🐧 _𝑯𝒆𝒙𝒂𝒈𝒐𝒏𝒛_
🐧 _𝑭𝒊𝒙𝑴𝒐𝒐𝒅 𝒀𝑻_
🐧 _𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿_
🐧 _𝑭𝒐𝒙𝒚𝑪𝒐𝒅𝒆𝑿_
`
sendButLocation(from, `${menu1}`, `${footer}`, {jpegThumbnail:thumb}, [
{buttonId:`#allmenu`,buttonText:{displayText:'📒All Menu'},type:1},
{buttonId:`#owner`,buttonText:{displayText:'👤 Contact Developer'},type:1}
], {sendEphemeral: true, contextInfo: { mentionedJid: [wa + "@s.whatsapp.net", sender]}})
}
else if (model == 'image'){
let memek = await hydra.prepareMessage(from, keren, image)
butto1 = [
{buttonId: `${prefix}rules`, buttonText: {displayText: '️S&K'}, type: 1},
{buttonId: `${prefix}owner`, buttonText: {displayText: 'Contact Developer'}, type: 1}
]
gbuttonan = {
imageMessage: memek.message.imageMessage,
contentText: `${menu1}`,
footerText: `🌹 ${namabot} 🌹`,
buttons: butto1,
headerType: 4
}
await hydra.sendMessage(from, gbuttonan, MessageType.buttonsMessage,{ quoted:ftroli, sendEphemeral: true, contextInfo: 
{ mentionedJid: [wa + "@s.whatsapp.net", sender], forwardingScore: 508, isForwarded: false, "externalAdReply": {
title: `${namabot}`,
body: `By ${namaown}`,
previewType: 1,
thumbnailUrl: "https://ibb.co/YQ20MR2/IMG-20211223-WA0093.jpg",
thumbnail: fs.readFileSync('./media/thumb.jpg'), }}})
}
break

case 'menu':
if (modelall == 'location'){
yas = `${ucapanWaktu} - @${sender.split('@')[0]}

*_Info - Bot_*
🕊 _Owner : @${owner}_
🕊 _Type : Nodejs_
🕊 _Library : Baileys_
🕊 _Language : Javascript_
🕊 _Mode : ${banChats ? "Self - Mode" : "Public - Mode"}_
🕊 _Speed : ${latensi.toFixed(4)} Seccond_

*_Info - Time_*
🐼 _${timeWib} Wib_
🐼 _${timeWita} Wita_
🐼 _${timeWit} Wit_

*_Special Thanks To_*
🐧 _𝑯𝒆𝒙𝒂𝒈𝒐𝒏𝒛_
🐧 _𝑭𝒊𝒙𝑴𝒐𝒐𝒅 𝒀𝑻_
🐧 _𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿_
🐧 _𝑭𝒐𝒙𝒚𝑪𝒐𝒅𝒆𝑿_

${readmore} ${menu(prefix)}`
sendButLocation(from, `${yas}`, `${namabot}`, {jpegThumbnail:thumb}, [
{buttonId:`${prefix}rules`,buttonText:{displayText:'Syarat Ketentuan'},type:1},
{buttonId:`${prefix}owner`,buttonText:{displayText:'Contact Developer'},type:1}
], {sendEphemeral: true, contextInfo: { mentionedJid: [wa + "@s.whatsapp.net", sender]}})
}
else if (modelall == 'image'){
let memew = await hydra.prepareMessage(from, keren, image)
buttow = [
{buttonId: `${prefix}rules`, buttonText: {displayText: '️Syarat Ketentuan'}, type: 1},
{buttonId: `${prefix}owner`, buttonText: {displayText: 'Contact Developer'}, type: 1}
]
gbuttonan = {
imageMessage: memew.message.imageMessage,
contentText: `${yas}`,
footerText: `🌹 ${namabot} 🌹`,
buttons: buttow,
headerType: 4
}
await hydra.sendMessage(from, gbuttonan, MessageType.buttonsMessage,{ quoted:ftroli, sendEphemeral: true, contextInfo: 
{ mentionedJid: [wa + "@s.whatsapp.net", sender], forwardingScore: 508, isForwarded: false, "externalAdReply": {
title: `${namabot}`,
body: `By ${namaown}`,
previewType: 1,
thumbnailUrl: "https://ibb.co/YQ20MR2/IMG-20211223-WA0093.jpg",
thumbnail: fs.readFileSync('./media/thumb.jpg'), }}})
}
break

case 'owner':
case 'creator':
     let ini_list = []
     for (let i of ownerNumbers) {
     const vname = hydra.contacts[i] != undefined ? hydra.contacts[i].vname || hydra.contacts[i].notify : undefined
     ini_list.push({
     "displayName": 'CodeXTeam',
     "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${hydra.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
     hehe = await hydra.sendMessage(from, {
     "displayName": `${ini_list.length} kontak`,
     "contacts": ini_list 
     }, 'contactsArrayMessage', { quoted: mek })
     hydra.sendMessage(from,'Itu Owner Ku Kak !\nJangan Sungkan Buat ngechat ya kak !︎',text,{quoted: hehe})
     break          

case 'sc':
case 'scriptku':
case 'script':
freply(`Bot Ini Menggunakan Script Bot\n*𒉽* https://youtu.be/O91DT1pR1ew`)
break
    case 'rules':
            teks = `           *Rules For User Bot*


鉃 Tolong Gunakan Delay Jangan Spam Saat Menggunakan Bot, Mentang Mentang Gratis Diborong semua.

鉃 Call/VC Bot Auto Block.

鉃 Jangan Call/VC Bot Kalau Tidak Aktif.

鉃 Jangan Spam Bot. Sanksi *WARN/SOFT BLOCK*
     
鉃 Jangan Telepon Bot. Sanksi *SOFT BLOCK*
      
鉃 Jangan Mengeksploitasi Bot. Sanksi *PERMANENT BLOCK*

鉃 Bot Tidak Aktif 24 Jam, Jadi Tergantung Kalau Ownernya Lagi Ada Waktu Botnya Juga On.

鉃 Kami Tidak Menyimpan Gambar, Video, File, Audio, Dan Dokumen Yang Anda Kirim.

鉃 Kami Tidak Akan Pernah Meminta Anda Untuk Memberikan Informasi Pribadi.

鉃 Jika Menemukan Bug/Error Silahkan Langsung Lapor Ke Owner Bot.

鉃 Apapun Yang Anda Perintah Pada Bot Ini *KAMI TIDAK AKAN BERTANGGUNG JAWAB!*

鉃 Konsekuensi Bila Melanggar Rules, Bot Akan Memblokir Kamu Atau Mengeluarkan Kamu Dari Grup.

鉃 *Owner Bot*
wa.me/${owner} 

          鈹 ${namabot} 鈹`
sendButLocation(from, `${teks}`, `${fake}`, {jpegThumbnail:fotofake}, [
{buttonId:`owner`,buttonText:{displayText:'👤Contact Owner'},type:1}
], {sendEphemeral: true, contextInfo: { mentionedJid: [sender]}})
            break
 
case 'runtime':
    case 'test':
           teks = `${kyun(run)}`
           freply(teks)
           break  
	case 'speed':
	case 'ping':			
		   exec(`neofetch --stdout`, (error, stdout, stderr) => {
		   const child = stdout.toString('utf-8')
		   const teks = child.replace(/Memory:/, "Ram:")
		   const pingnya = `${teks}「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\n Merespon Dalam ${latensi.toFixed(4)} Second`
		   freply(pingnya)
	   	   })
	   	   break 
    case 'tes':
           teks = `Active !!!\n*Mode* : ${banChats ? "Self - Mode" : "Public - Mode"}\n*Runtime*: ${kyun(run)}`
           freply(teks)
           break
//<!------ Public & Self ------!>
case 'public':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           if (banChats === false) return
           banChats = false
           freply(`*「 Succes Change To Public - Mode 」*`)
           break
	case 'self':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           if (banChats === true) return
           uptime = process.uptime()
           banChats = true
           freply(`*「 Succes Change To Self - Mode 」*`)
           break
//<!----- Owner Menu -----!>
	case 'setmenu':
if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
if(args[0] == 'Location'){
model = "location"
freply('_Success Changed To Button Location Menu_')
}else if(args[0] == 'Image'){
model = "image"
freply('_Success Changed To Button Image Menu_')
}else{
freply(`Pilih Query Nyaa !!\n • Location\n • Image`)
}
break
	case 'setallmenu':
if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
if(args[0] == 'Location'){
modelall = "location"
freply('_Success Changed To Button Location Menu_')
}else if(args[0] == 'Image'){
modelall = "image"
freply('_Success Changed To Button Image Menu_')
}else{
freply(`Pilih Query Nyaa !!\n • Location\n • Image`)
}
break
case 'addcmd': 
    case 'setcmd':
          if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
          if (isQuotedSticker) {
          if (!q) return freply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
          var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
          addCmd(kodenya, q)
          freply("Done Bwang")
          } else {
          freply('tag stickenya')
          }
          break
    case 'delcmd':
          if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
          if (!isQuotedSticker) return freply(`Penggunaan : ${command} tagsticker`)
          var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
          scommand.splice(getCommandPosition(kodenya), 1)
          fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
          freply("Done Bwang")
          break
    case 'listcmd':
          let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
          let cemde = [];
          for (let i of scommand) {
          cemde.push(i.id)
          teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
          }
          freply(teksnyee)
          break 
         case 'd':
				case 'del':
				case 'delete':
					hydra.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
            case 'bcbutton':

            case 'bc':
            case 'broadcast':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)

            if (args.length < 1) return reply('Textnya Mane?')

            anu = await hydra.chats.all()

            for (let _ of anu) {

            const buttons = [{buttonId: `${prefix}menu`, buttonText: {displayText: `📒Menu`}, type: 1}]

            const buttonMessage = {

            headerType: "IMAGE",

            contentText: `*「 CodeXBot Broadcast 」*\n\n${q}`,

            footerText: `*Silahkan Lanjut Ke Menu!*`,

            buttons: buttons,

            headerType: 1

            }

            hydra.sendMessage(`${_.jid}`,

            buttonMessage,

            MessageType.buttonsMessage)
            }

            reply('* Udah Ni Sayang!*')

            break   
  case 'autoread':
           if (!isOwner && !mek.key.fromMe) return
           if (args.length < 1) return freply(`Example:\n${prefix}autoread gc on`)
           if (args[0] === "gc") {
           if (args.length < 2) return freply(`Example:\n${prefix}autoread gc on`)
           if (args[1] === "on") {
           if (readG === true) return
           readG = true
           freply(`Succes mengaktifkan autoread group`)
           } else if (args[1] === "off") {
           if (readG === false) return
           readG = false
           freply(`Succes mematikan autoread group`)
           } else {
           freply(`Pilih on atau off`)
           }
           } else if (args[0] === "pc") {
           if (args.length < 2) return freply(`Example:\n${prefix}autoread pc on`)
           if (args[1] === "on") {
           if (readP === true) return
           readP = true
           freply(`Succes mengaktifkan autoread pribadi`)
           } else if (args[1] === "off") {
           if (readP === false) return
           readP = false
           freply(`Succes mematikan autoread pribadi`)
           } else {
           freply(`Pilih on atau off`)
           }
           } else {
           freply(`*List Auto Read*\n•> gc\n•> pc`)
           }
           break 
           case 'addupdate':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           if (!q) return freply(`Example: ${command} update fitur`)
           _update.push(q)
           fs.writeFileSync('./database/update.json', JSON.stringify(_update))
           freply(`Update fitur berhasil ditambahkan ke database!`)
           break
    case 'update':
           let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
           for (let i of _update) {
           updateList += `࿃ *${i.replace(_update)}*\n\n`
           }
           freply(updateList)
           break
	case 'term':
           if (!mek.key.fromMe && !isOwner) return
		   if (!q) return freply(mess.wrongFormat)
		   exec(q, (err, stdout) => {
		   if (err) return freply(`SELF-BOT:~ ${err}`)
	   	   if (stdout) {
		   freply(stdout)
	  	   }
		   })
		   break            
           case 'deletepc':
           if (!mek.key.fromMe && !isOwner) return
           anu = await hydra.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
           for (let _ of anu) {
           hydra.modifyChat(_.jid, 'delete', {
           includeStarred: false
           })
           }
           await freply(`Berhasil menghapus ${anu.length} pribadi chat`)
           break
    case 'on':
    case 'online':
           if (!mek.key.fromMe && !isOwner) return 
           offline = false
           freply(' ```ANDA TELAH ONLINE``` ')
           break
    case 'off':
    case 'offline':
           if (!mek.key.fromMe && !isOwner) return 
           offline = true
           waktu = Date.now()
           anuu = args.join(' ') ? args.join(' ') : '-'
           alasan = anuu
           freply(' ```ANDA TELAH OFFLINE``` ')
           break           
           case 'setreply':
	case 'setfake':
           if (!mek.key.fromMe && !isOwner) return
		   if (!q) return freply(mess.wrongFormat)
		   fake = q
		   freply(`Succes Mengganti Conversation Fake : ${q}`)
		   break
	case 'setfakeimg':
           if (!mek.key.fromMe && !isOwner) return
           if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
           boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	  	   delb = await hydra.downloadMediaMessage(boij)
	       fs.writeFileSync(Mfake, delb)
	   	   freply('Sukses')
           } else {
           freply(`Kirim gambar dengan caption ${prefix}sethumb`)
           }
		   break	
	case 'setthumb':
           if (!mek.key.fromMe && !isOwner) return
	       if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
           boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	  	   delb = await hydra.downloadMediaMessage(boij)
		   fs.writeFileSync(Mthumb, delb)
		   freply('Sukses')
           } else {
           freply(`Kirim gambar dengan caption ${prefix}sethumb`)
           }
 		   break
 		   case 'leaveall':
           if (!isOwner) return  reply(mess.only.owner)           
           for (let id of totalgroup) {
           sendMess(id, 'Bye²🐣', null)
           await sleep(3000)
           hydra.groupLeave(id)
}
           break
    case 'leavegroup':
           if (!mek.key.fromMe && !isOwner) return
           if (!isGroup) return reply(mess.only.group)
           setTimeout( () => {
           hydra.groupLeave(from) 
           }, 2000)
           setTimeout( () => {
           freply('Bye²🐣')
           }, 0)
           break        
    case 'exif':
           if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)      
           if (!q) return reply(mess.wrongFormat)
           if (!arg.split('|')) return freply(`Penggunaan ${prefix}exif nama|author`)
           exif.create(arg.split('|')[0], arg.split('|')[1])
           freply('Sukses!!')
           break		
    case 'join':
    case 'joingc':
	    if (!q) return reply('Linknya?')
		if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
		if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Lord')
		freply('Tunggu Sebentar Otw Masuk Group')
		link = args[0].replace('https://chat.whatsapp.com/','')
		fak = hydra.query({ json: ['action', 'invite', link],
    	expect200: true })
		freply('Berhasil Masuk Grup')
		break
		case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
           if (c === 'multi'){
              multi = true
              nopref = false
                    freply(`\`\`\`Succes change prefix =「 ${c} 」\`\`\``)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    freply(`\`\`\`Succes change prefix =「 ${c} 」\`\`\``)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    freply(`\`\`\`Succes change prefix =「 ${c} 」\`\`\``)
                }
                break
case 'setpresence':
            if (!mek.key.fromMe && !isOwner) return mentions(`*Perintah ini Khusus @${owner} !*`, [`${owner}@s.whatsapp.net`], true)
            if (args.length < 1) return reply('bukan gitu')
            if((args[0]) == 'vn'){
            ngetik = false
            vn = true
            if(vn) return freply('_Succes Mengaktifkan Presence !_')
            freply(`_Succsl,es mengganti ke vn..!!,_`)
            } else
if ((args[0]) == 'ketik'){
            ngetik = true
            vn = false
            if(ngetik)return freply('_Succes Mengaktifkan Presence !_')
            freply(`_Succes mengganti ngetik..!!_`)
           } else
           if ((args[0]) == 'off'){
            ngetik = false
            vn = false
            if(ngetik)return reply('_Sudah diaktifkan sebelumnya!_')
            freply(`_Succes mematikan presence !_`)
}
            break            
            case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await hydra.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    hydra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(meidia)
					fs.unlinkSync(`./sticker/takestik${sender}.exif`)
				})
				break
				case 'setppbot':
			    hydra.updatePresence(from, Presence.composing)
					if (!isOwner) return reply('Kalau Bukan Owner Gak Usah Banyak Tingkah Deh')
					hydra.updatePresence(from, Presence.composing) 
				   enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				     meda = await hydra.downloadAndSaveMediaMessage(enmedia)
					await hydra.updateProfilePicture(botNumber, meda)
					reply('Makasih profil barunya😗')
					break
					case 'upswteks':
            if (!mek.key.fromMe && !isOwner) return
            if (!q) return freply('Isi teksnya!')
            hydra.sendMessage('status@broadcast', `${q}`, extendedText)
            freply(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (!mek.key.fromMe && !isOwner) return
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hydra.downloadMediaMessage(swsw)
            hydra.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hydra.sendMessage(from, bur, text, { quoted: mek })
            } else {
            freply('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!mek.key.fromMe && !isOwner) return
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hydra.downloadMediaMessage(swsw)
            hydra.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hydra.sendMessage(from, bur, text, { quoted: mek })
            } else {
            freply('reply videonya!')
            }
            break
//<!----- Game Menu -----!>
case 'suit': 
            if (!q) return freply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
            const userspilih = q
            if (!userspilih.match(/batu|gunting|kertas/)) return freply(`Pilih batu, kertas, gunting`)
            var computer = Math.random();
            if (computer < 0.34 ) {
            computer = 'batu';
            } else if( computer >= 0.34 && computer < 0.67) {
            computer = 'gunting';
            } else {
            computer = 'kertas';
}
            if ( userspilih == computer ) {
            freply(`Pertandingan Seri!`)
            } else if ( userspilih == 'batu' ) {
            if( computer == 'gunting' ) {
            freply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
            } else {
            freply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
            } else if ( userspilih == 'gunting' ) {
            if( computer == 'batu' ) {
            freply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
            } else {
            freply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
            } else if ( userspilih == 'kertas' ) {
            if( computer == 'batu' ) {
            freply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
            } else {
            freply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
            break   
            case 'slot':
									const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
									somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
									somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									rn = randomNomor(100)
									if (somtoyy== '🍌 : 🍌 : 🍌') {
										bp = await sendButMessage(from, `🎰 GAME SLOT 🎰\n\n⌬━━━━━━━━⌬\n${somtoy}\n${somtoyy} ⌬━━━⌬\n${somtoyyy}\n⌬━━━━━━━━⌬\n\n⌬━⌬ *You Win* ⌬━⌬`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `Next️`,
											},
											type: 1,
											}]);
										} else if (somtoyy == '🍒 : 🍒 : 🍒') {
									bp = await sendButMessage(from, `🎰 GAME SLOT 🎰\n\n⌬━━━━━━━━⌬\n${somtoy}\n${somtoyy} ⌬━━━⌬\n${somtoyyy}\n⌬━━━━━━━━⌬\n\n⌬━⌬ *You Win* ⌬━⌬`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `Next`,
											},
											type: 1,
											}]);
										} else if (somtoyy == '🔔 : 🔔 : 🔔') {
											bp = await sendButMessage(from, `🎰 GAME SLOT 🎰\n\n⌬━━━━━━━━⌬\n${somtoy}\n${somtoyy} ⌬━━━⌬\n${somtoyyy}\n⌬━━━━━━━━⌬\n\n⌬━⌬ *You Win* ⌬━⌬`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `Next`,
											},
											type: 1,
											}]);
												} else if (somtoyy == '🍐 : 🍐 : 🍐') {
													bp = await sendButMessage(from, `🎰 GAME SLOT 🎰\n\n⌬━━━━━━━━⌬\n${somtoy}\n${somtoyy} ⌬━━━⌬\n${somtoyyy}\n⌬━━━━━━━━⌬\n\n⌬━⌬ *You Win* ⌬━⌬`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `Next️`,
											},
											type: 1,
											}]);
														} else if (somtoyy == '🍇 : 🍇 : 🍇') {
															bp = await sendButMessage(from, `🎰 GAME SLOT 🎰\n\n⌬━━━━━━━━⌬\n${somtoy}\n${somtoyy} ⌬━━━⌬\n${somtoyyy}\n⌬━━━━━━━━⌬\n\n⌬━⌬ *You Win* ⌬━⌬`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `Next️`,
											},
											type: 1,
											}]);
																} else {
																	ok = await sendButMessage(from, `🎰 GAME SLOT 🎰\n\n⌬━━━━━━━━⌬\n${somtoy}\n${somtoyy} ⌬━━━⌬\n${somtoyyy}\n⌬━━━━━━━━⌬\n\n⌬━⌬ *You Lose* ⌬━⌬`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `Next`,
											},
											type: 1,
											}]);
																	}
															break
		case 'gelud':
            if (isGame(sender, gcount, glimit)) return freply(`Limit game kamu sudah habis`)
            if (!isGroup) return freply(mess.only.group)
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return freply('Hanya bisa dengan 1 orang')
            if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
            if (args.length === 0) return freply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
            if (fs.existsSync(`./media/${from}.json`)) return freply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)					
            gelutSkuy = setGelud(`${from}`)
            gelutSkuy.status = false
            gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
            gelutSkuy.Y = args[0].replace("@", "");
            fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
            starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

            hydra.sendMessage(from, starGame, text, { quoted: ftroli, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
            gameAdd(sender, glimit)
            break
    case 'delsesigelud':
            if (!isGroup) return freply(mess.only.group)
            if (fs.existsSync('./media/' + from + '.json')) {
            fs.unlinkSync('./media/' + from + '.json')
            freply('Berhasil Menghapus Sesi Gelud')
            } else {
            freply('Tidak ada sesi yang berlangsung')
}
            break
    case 'delsesittt':
    case 'delttt':
    case 'resetgame':
    //if (!isOwner) return freply(mess.only.owner)
            if (!isGroup) return freply(mess.only.group)
            if (!isTTT) return freply('Tidak Ada Permainan Di Grub Ini')
            naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
            ky_ttt = naa 
            freply('Sukses Mereset Game')
            break
    case 'tictactoe':
    case 'ttc':
    case 'ttt':
            //if (isGame(sender, gcount, glimit)) return freply(`Limit game kamu sudah habis`)
            if (!isGroup) return freply(mess.only.group)
            if (args.length < 1) return freply('Tag Lawan Anda! ')
            if (isTTT) return freply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return freply('Tag target Lawan!')
            ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
            player1 = sender
            player2 = ment[0]
            angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
            id = from
            gilir = player2
            ky_ttt.push({player1,player2,id,angka,gilir})
            hydra.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
            //gameAdd(sender, glimit)
            break
//<!------- Group Menu -------!>
case 'welcome':
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
            if (args.length < 1) return freply('!welcome enable/disable')
            if ((args[0]) === 'enable') {
            if (isWelkom) return freply('Udah aktif')
            welkom.push(from)
            fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
            freply('Sukses mengaktifkan fitur welcome di group ini ✔️')
            } else if ((args[0]) === 'disable') {
            welkom.splice(from, 1)
            fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
            freply('Sukses menonaktifkan fitur welcome di group ini ✔️')
            } else {
            freply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
            break
           case 'antilink':
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
            if (!isBotGroupAdmins) return freply(`Bot Harus jadi Admin`)
            if (!q) return freply(`Pilih enable atau disable`)
            if (args[0].toLowerCase() === 'enable'){
            if (isAntiLink) return freply(`Udah aktif`)
            antilink.push(from)
            fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
            freply('Sukses mengaktifkan fitur antilink di group ini ✔️')
            } else if (args[0].toLowerCase() === 'disable'){
            let anu = antilink.indexOf(from)
            antilink.splice(anu, 1)
            fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
            freply('Sukses menonaktifkan fitur antilink di group ini ✔️')
            } else {
            freply(`Enable untuk mengaktifkan, disable untuk menonaktifkan`)
}
            break     
           case 'setppgrup':
           case 'setppgroup':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmed = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let med = await hydra.downloadMediaMessage(encmed)
              hydra.updateProfilePicture(from, med)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
              case 'tagall':
            if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply(mess.only.admin)
            if (!isGroup) return freply(mess.only.group)
            members_id = []
            teks = (args.length > 0) ? body.slice(8).trim() : ''
            teks += '\n\n'
            for (let mem of groupMembers) {
            teks += `•> @${mem.jid.split('@')[0]}\n`
            members_id.push(mem.jid)
            }
            mentions(teks, members_id, true)
            break
 	case 'hidetag':
			if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return freply(mess.only.admin)
			if (!isGroup) return freply(mess.only.group)
			var value = args.join(' ')
			var group = await hydra.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			hydra.sendMessage(from, optionshidetag, text)
			break
			case 'kick': 
            if (!isGroup) return reply(mess.group)

            if (!isOwner && !isGroupAdmins) return reply(mess.admin)
            if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            y = q.split('@')[1] + '@s.whatsapp.net'
            hydra.groupRemove(from, [y])
            reply(`Succses kick target!`)
            break
case 'add':
           if (!isGroup) return      
           if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply(mess.only.admin)
           if (!isBotGroupAdmins) return freply(mess.badmin)      
           if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
           entah = arg.split("|")[0]
           entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
           entah = `${entah}@s.whatsapp.net`
           hydra.groupAdd(from, [entah])
           } else {
           entah = mek.message.extendedTextMessage.contextInfo.participant
           hydra.groupAdd(from, [entah])
           }
           break
		case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
             contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'audio/mp4',
            ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            freply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
            case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return freply(mess.Iv)
            if (!q) return freply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return freply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hydra.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : No Desc'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             hydra.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             freply('Link error')
             }
             break
                  case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await hydra.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Desc :* \n${groupMetadata.desc}`
              hydra.sendMessage(from, await getBuffer(pic), image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6285878313791@g.us" }: {})},message:{"orderMessage":{"orderId":"6285878313791","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
             case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        hydra.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
        case "closegc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        hydra.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
             case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
             contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'audio/mp4',
            ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            freply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
            case 'pm': case 'promote':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null)
            return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
            hydra.groupMakeAdmin(from, mentioned)
            break
					

            case 'dm': case 'demote':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null)
            return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
            hydra.groupDemoteAdmin(from, mentioned)
            break
            case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
  const asukntol = hydra.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${hydra.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(asukntol)
  break
  case 'linkgroup':
            case 'linkgc':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            linkgc = await hydra.groupInviteCode(from)
            reply('https://chat.whatsapp.com/'+linkgc)
            break
            case 'read': case 'sider':
            if (!isGroupAdmins && !itsMe && !isOwner)return reply(mess.admin)
            if (!isGroup) return reply(mess.group)

            if (!isQuotedMsg)return reply('Reply pesan bot')
            infom = await hydra.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
            tagg = []
teks = `Telah Dibaca Oleh :\n\n`
            for(let i of infom.reads){

            teks += '⬡'+' ' + '@' + i.jid.split('@')[0] + '\n'
            teks += `┗━ ⬡ Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)

            }

            mentions(teks, tagg, true)
            break
//<!------ Sticker Menu ------!>
case 'stickerwm':
					case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await hydra.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											hydra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await hydra.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											hydra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break              
case 'stickerzoom':
       case 'stikerzoom':
       case 'szoom':
       case 'stickergifzoom':
       case 'stikergifzoom':
       case 'sgifzoom':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              var encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             var mediat = await hydra.downloadAndSaveMediaMessage(encmediat)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ./sticker/data.exif ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              hydra.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
              fs.unlinkSync(ron)
})
})
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              var encmediatt = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              var mediat = await hydra.downloadAndSaveMediaMessage(encmediatt)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ./sticker/data.exif ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              hydra.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
              fs.unlinkSync(ron)
})
})
              } else {
              reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
              break

case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							var enbcmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							var mbedia = await hydra.downloadAndSaveMediaMessage(enbcmedia, `./sticker/${sender}`)
							await ffmpeg(`${mbedia}`)
									.input(mbedia)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(mbedia)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
										 hydra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgclink})
											fs.unlinkSync(mbedia)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							var enacmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							var maedia = await hydra.downloadAndSaveMediaMessage(enacmedia, `./sticker/${sender}`)
							freply(mess.wait)
								await ffmpeg(`${maedia}`)
									.inputFormat(maedia.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(maedia)
										tipe = maedia.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											hydra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgclink })
											fs.unlinkSync(maedia)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
						case 'gura':
case 'gawrgura':
case 'stickgura':
case 'gurastick':
var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
sendStickerUrl(from, wifegerakx)
break

case 'doge':
case 'domge':
case 'stickdoge':
case 'dogestick':
var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
sendStickerUrl(from, wifegerakx)
break

case 'patrick':
case 'patrik':
case 'patrickstick':
var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
sendStickerUrl(from, wifegerakx)
break
  case 'takestick':
					case 'take':
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await hydra.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							hydra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
					case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await hydra.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await hydra.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							hydra.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
//<!------ Search Menu ------!>
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*──────  ❒「Google Search」❒  ──────*
➼ Judul : ${i.title}
➼ Link : ${i.link}
➼ Keterangan : ${i.snippet}
`
}
var akhir = kant.trim()
reply(akhir)
break
                              case 'tiktoknowm':
                              case 'tiktok':
                                    if (!q) return fakestatus('Linknya?')
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									freply(mess.wait)
									let nwem = q
									hx.ttdownloader(nwem)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
										.then(async (a) => {
                                                                                        let mno = await getBuffer(nowm)
											me = `*Link* : ${a.data}`
										hydra.sendMessage(from,mno,MessageType.video,{mimetype:'video/mp4',quoted: mek, caption:me})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break
									case 'tiktokaudio':
                              case 'tiktokmusic':
                                    if (!q) return fakestatus('Linknya?')
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									freply(mess.wait)
									let nowem = q
									hx.ttdownloader(nowem)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
										.then(async (a) => {
                                                                                        let meno = await getBuffer(nowm)
										hydra.sendMessage(from,meno,MessageType.audio,{mimetype:'audio/mp3',quoted: mek})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break 
	case 'ytsearch': case 'yts':
if(!q) return reply(`Example : ${prefix + command} Melukis senja`)
reply('Searching...')
try{
ysearch = await yts(q)
}catch(e){
return reply(mess.error.api)
}
p = 0
teks = `Y TS E A R C H\nTotal : ${ysearch.all.length}\n\n`
for(let i of ysearch.all){
teks += `${p+=1}.\nTitle :` + i.title + '\n'
teks += `Url :` + i.url + '\n'
teks += `Durasi :` + i.timestamp + '\n\n-----------------------------\n\n'
}
teks +=`Ketik ${prefix}ytmp3 < link > untuk mengambil Music!\nKetik ${prefix}ytmp4 < link > untuk mengambil Video!`
reply(teks)
break
case 'play':
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
reply('Searching...')
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `*🔎 Data Berhasil Di Temukan !!*
*Title* : ${title}
*Views* : ${yut.videos[0].views}
*Duration* : ${yut.videos[0].timestamp}
*URL* : ${yut.videos[0].url}`
//sendMediaURL(from, thumb, capti)
ya = await getBuffer(thumb)
py =await hydra.prepareMessage(from, ya, image)
hydra.sendMessage(from, { contentText: `${capti}`, footerText: `${fake}`, 
buttons: [
{buttonId: `${prefix}ytmp3 ${yut.videos[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
{buttonId: `${prefix}ytmp4 ${yut.videos[0].url}}`, buttonText: {displayText: 'VIDEO'}, type: 1}], 
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '',
jpegThumbnail: ya, 
contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
})
 break     
 case 'ytmp3':
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [ Link Video YT ]*`)
try {
freply((mess.wait))
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 35000) return sendMediaURL(from, thumb, `🔎 Data Berhasil Didapatkan!\n\n*Title* : ${title}\n*Ext* : MP3\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captions = `🔎 Data Berhasil Didapatkan!\n*Title* : ${title}\n*Ext* : MP3\n*Link* : ${a.data}\n\nSilahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
bvidt2 = await getBuffer(thumb)
freply(captions)
bvid2 = await getBuffer(dl_link)
await 
hydra.sendMessage(from, bvid2, audio, { quoted:mek
})
})
})
} catch (err) {
reply(mess.error.api)
}
break

case 'ytmp4':
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [ Link Video YT ]*`)
try {
freply((mess.wait))
ytv(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 40000) return reply(`🔎 Data Berhasil Didapatkan!
*Title* : ${title}
*Ext* : MP4
*Link* : ${a.data}

Untuk durasi lebih dari batas disajikan dalam bentuk link`)
				const captionsYtmp4 = `🔎 Data Berhasil Didapatkan!
*Title* : ${title}
*Ext* : MP4
*Link* : ${a.data}

Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
bvidt3 = await getBuffer(thumb)
freply(captionsYtmp4)
bvid3 = await getBuffer(dl_link)
await hydra.sendMessage(from, bvid3, video, { quoted:mek
})
})		
})
} catch (err) {
reply(mess.error.api)
}
break
case 'mediafire':
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link Tidak Valid !!')
               reply(mess.wait)
 
               res = await mediafiredl(q)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`❒ Nama : ${res[0].nama}\`\`\`
\`\`\`❒ Ukuran : ${res[0].size}\`\`\`
\`\`\`❒ Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6285878313791@g.us" }: {})},message:{"orderMessage":{"orderId":"6285878313791","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             break  
case 'pinterest':      
case 'pin':  
              if(!q) return reply('gambar apa?')
              freply(mess.wait)
              let pin = await hx.pinterest(q)
              let ac = pin[Math.floor(Math.random() * pin.length)]
              let di = await getBuffer(ac)
              pll = ` Pinterest : ${q}`
   sendButImage(from, pll, `Next to continue..!!`, di, [                      
          { buttonId: `${prefix+command} ${q}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
                    break
case 'ig':
case 'instagram':
case 'igdl':
try{
if(!q)return reply(`Mana Linknya Kak?`)
igg = await fetchJson(`http://zekais-api.herokuapp.com/igdl?url=${q}&apikey=dnYyDs9a`)
igt = `🔎 Data Berhasil Didapatkan !

*Fullname*  : ${igg.fullName}
*Username*  : ${igg.username}
*Followers* : ${igg.followers}

Wait a minute ${igg.result[0].type} is being sent..`
reply((igt))
sendMediaURL(from,igg.result[0].url,(`Type ${igg.result[0].type}`))
} catch (e) {
reply(e)
console.log(e)
}
break
case 'cekapikey':
		   case 'lolkey':             

           if (args.length < 1) return freply(`Caranya ${prefix + command} apikey`) 

           anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)

           teks = `*──「 YOUR APIKEY 」──*

              

*Ussername : ${anu.result.username}*

*Request : ${anu.result.requests}*

*Today :${anu.result.today}*

*Akun Type : ${anu.result.account_type}*

*Expired : ${anu.result.expired}*



*Website Apikey*

https://api.lolhuman.xyz`

           hydra.sendMessage(from, teks, text, {quoted: ftroli})

           break

case 'bokep':
var pll = 'Ini Kak Asupannya >_<'
reply(mess.wait)
blow = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
sendButVideo(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
break
case 'cogan':
replly(`⏳Cotto A Minute...`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=codexteam`)
wmn = `CodeXBot`
trans = `Jangan Lupa Donasi!`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '🌹 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecan':
replly(`⏳Cotto A Minute...`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=codexteam`)
wmn = `CodeXBot`
trans = `Jangan Lupa Donasi!`
but = [
          { buttonId: `${prefix}cecan`, buttonText: { displayText: '🌹 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecanvietnam':
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/vietnam?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanrandom':
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/cecan?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, image, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'hijaber':
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/hijaber?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, image, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'santuy':
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/santuy?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, video, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'ukhti':
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/ukty?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, video, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'bocil':
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/bocil?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, video, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'ghea':
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/ghea?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, video, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'rika':
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/rikagusriani?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, video, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanmalaysia':
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/malaysia?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecankorea':
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/korea?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanindonesia':
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/indonesia?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanjapan':
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/japan?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanthailand':
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/thailand?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: ftoko, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
//<!------- Nsfw Fitur ------!>
case 'gasm':
case 'pussy':
case 'neko':
case 'lesbian':
case 'kuni':
case 'cumsluts':
case 'classic':
case 'boobs':
case 'anal':
case 'avatar':
case 'yuri':
case 'trap':
case 'tits':
case 'kitsune':
case 'holo':
case 'keta':
case 'hentai':
case 'futanari':
case 'femdom':
case 'feet':
case 'ero':
case 'spank':
case 'kemonomimi':
var pll = 'Awas Nanti Sabun Ya Bolong (≧▽≦)'
freply(mess.wait)
kon = await getBuffer(`https://hardianto.xyz/api/anime/random?nsfw=${command}&apikey=hardianto`)
gtsuian = [
{buttonId:`${prefix+command}`,buttonText:{displayText:'Next'},type:1}
]
mhan = await hydra.prepareMessage(from, kon, image, {thumbnail: kon})
const botttmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${pll}`,
footerText: `${namabot}`,
buttons: gtsuian,
headerType: 4
}
hydra.sendMessage(from, botttmenu, MessageType.buttonsMessage, {quoted: ftroli, contextInfo: {mentionedJid:[sender]}})
break
case 'cry':
        case 'kill':
        case 'hug':
        case 'pat':
        case 'lick':
        case 'kiss':
        case 'bite':
        case 'yeet':
        case 'neko':
        case 'bully':
        case 'bonk':
        case 'wink':
        case 'poke':
        case 'nom':
        case 'slap':
        case 'smile':
        case 'wave':
        case 'awoo':
        case 'blush':
        case 'smug':
        case 'glomp':
        case 'happy':
        case 'dance':
        case 'cringe':
        case 'cuddle':
        case 'highfive':
        case 'shinobu':
        case 'megumin':
        case 'handhold':
            reply(mess.wait)
            anu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
            buffer = await getBuffer(anu.url)
            hydra.sendMessage(from, buffer, image, {quoted: mek, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
            break
case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':

              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `🤙Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'👤OWNER'},type:1}]
              imageMsg = ( await hydra.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Hii Kak!!', imageMessage: imageMsg,
              contentText:`WolfCodeX`,buttons,headerType:4}
              prep = await hydra.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              hydra.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'blowjob':
var pll = 'Awas Nanti Sabun Nya Bolong (≧▽≦)'
reply(mess.wait)
blow = await getBuffer('https://hardianto.xyz/api/anime/random?nsfw=blowJob&apikey=hardianto')
sendButImage(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
                    break
                    
           case 'bj':
var pll = 'Awas Nanti Sabun Nya Bolong (≧▽≦)'
reply(mess.wait)
blow = await getBuffer('https://hardianto.xyz/api/anime/random?nsfw=bJ&apikey=hardianto')
sendButImage(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
                    break
   case 'girlsolo':
var pll = 'Awas Nanti Sabun Nya Bolong (≧▽≦)'
reply(mess.wait)
blow = await getBuffer('https://hardianto.xyz/api/anime/random?nsfw=girlSolo&apikey=hardianto')
sendButImage(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
break
case 'holoero':
var pll = 'Awas Nanti Sabun Nya Bolong (≧▽≦)'
reply(mess.wait)
blow = await getBuffer('https://hardianto.xyz/api/anime/random?nsfw=holoEro&apikey=hardianto')
sendButImage(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
break
case 'erofeet':
var pll = 'Awas Nanti Sabun Nya Bolong (≧▽≦)'
reply(mess.wait)
blow = await getBuffer('https://hardianto.xyz/api/anime/random?nsfw=eroFeet&apikey=hardianto')
sendButImage(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
break
case 'erokitsune':
var pll = 'Awas Nanti Sabun Nya Bolong (≧▽≦)'
reply(mess.wait)
blow = await getBuffer('https://hardianto.xyz/api/anime/random?nsfw=eroKitsune&apikey=hardianto')
sendButImage(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
break
case 'erokemonomimi':
var pll = 'Awas Nanti Sabun Nya Bolong (≧▽≦)'
reply(mess.wait)
blow = await getBuffer('https://hardianto.xyz/api/anime/random?nsfw=eroKemonomimi&apikey=hardianto')
sendButImage(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
break
case 'eroneko':
var pll = 'Awas Nanti Sabun Nya Bolong (≧▽≦)'
reply(mess.wait)
blow = await getBuffer('https://hardianto.xyz/api/anime/random?nsfw=eroNeko&apikey=hardianto')
sendButImage(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
break
case 'eroyuri':
var pll = 'Awas Nanti Sabun Nya Bolong (≧▽≦)'
reply(mess.wait)
blow = await getBuffer('https://hardianto.xyz/api/anime/random?nsfw=eroYuri&apikey=hardianto')
sendButImage(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
break
case 'cumarts':
var pll = 'Awas Nanti Sabun Nya Bolong (≧▽≦)'
reply(mess.wait)
blow = await getBuffer('https://hardianto.xyz/api/anime/random?nsfw=cumArts&apikey=hardianto')
sendButImage(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:mek})          
break
//<!------ Kon-Tol ------!>
     case 'tourl':
  case 'imagetorul':
  case 'imgtourl':
  case 'audiotourl':
  case 'videotourl':
  case 'stickertourl':
  case 'stikertourl':
  case 'tolink':
  var imgbb = require('imgbb-uploader')
  if (isQuotedAudio) {
  ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  reply(mess.wait)
  owgi = await hydra.downloadAndSaveMediaMessage(ger)
  Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *AUDIO TO URL* 」 ─

*$Url : ${Okelor.display_url}*`
  reply(teks)
 
  } else if (isQuotedImage) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  reply(mess.wait)
  owgi = await hydra.downloadAndSaveMediaMessage(ger)
  qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks=`─ 「 *IMAGE TO URL* 」 ─

*Url : ${qbc.display_url}*`
  reply(teks)
  } else if (isQuotedVideo) {
  ger = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  reply(mess.wait)
  owgi = await hydra.downloadAndSaveMediaMessage(ger)
  ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *VIDEO TO URL* 」 ─

*$Url : ${ffff.display_url}*`
  reply(teks)
  } else if (isQuotedSticker) {
  ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  reply(mess.wait)
  owgi = await hydra.downloadAndSaveMediaMessage(ger)
  vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *STICKER TO URL* 」 ─

*Url : ${vrr.display_url}*`
  reply(teks)
  }
  break       
case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hydra.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            freply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
            if (!isQuotedVideo) return freply('Reply videonya!')
            freply(mess.wait)
            ecmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            mdia = await hydra.downloadAndSaveMediaMessage(ecmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${mdia} ${ran}`, (err) => {
            fs.unlinkSync(mdia)
            if (err) return freply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hydra.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            
            case 'attp':
            if (!q) return freply('Mana Textnya Kak ?')
            tolo = await getBuffer(`https://raku-web.herokuapp.com/api/maker/attp?apikey=RakuKeyTod&text=${q}`)
            hydra.sendMessage(from, tolo, sticker, {quoted:mek})
            break
            
            case 'ttp':
            if (!q) return freply('Mana Textnya Kak ?')
            tolo = await getBuffer(`https://raku-web.herokuapp.com/api/maker/ttp?apikey=RakuKeyTod&text=${q}`)
            hydra.sendMessage(from, tolo, sticker, {quoted:mek})
            break
     default:
//Function ViewOnce
if (isGroup && isAntiVO && m.mtype == 'viewOnceMessage'){
var msg = {...mek}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
        
typenya["viewOnce"] = false
            
typenya["caption"] = `*──「 ANTIVIEWONCE 」──*\n\n*Caption :* ${(typenya.caption === '') ? 'Tidak Ada Caption' : typenya.caption}\n*Time :* ${jmn} Wib\n*Date :* ${week} ${calender}\n\n*──「 TIDACK SEMUDAH ITU 」──*`
            
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
            
let pe = await hydra.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq})
            
await hydra.relayWAMessage(pe)
}
//Function Game        
            
if (fs.existsSync(`./media/${from}.json`)) {
gelutSkuy = setGelud(`${from}`)
if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
if (gelutSkuy.status) return freply(`Game telah dimulai sebelumnya!`)
gelutSkuy.status = true
rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
winR = rand0m[Math.floor(Math.random() * rand0m.length)]
fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
hydra.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
fs.unlinkSync("./media/" + from + ".json");
} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
hydra.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
fs.unlinkSync("./media/" + from + ".json");
}
}
if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}`
hydra.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
hydra.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return freply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return freply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return freply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
hydra.sendMessage(from, ucapan1, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
freply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
hydra.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return freply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return freply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return freply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
hydra.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
freply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
hydra.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}

     if (budy == 'p') {
                freply(`Ya, Ada Yang Bisa Saya Bantu? Kalo Bingung Ketik ${prefix}menu Ya Kak`)
            }
            if (budy == 'P') {
                freply(`Ya, Ada Yang Bisa Saya Bantu? Kalo Bingung Ketik ${prefix}menu Ya Kak`)
            }
            if (budy == 'Bot') {
                  sendButMessage(from, `*_Whats Up Bot FixMood In Here_*`, `_Select Menu To Display Menu List_`,
                  [{buttonId: `${prefix}menu`, buttonText: {displayText: `MENU`},type: 1}], {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: false}})
        }

            if (budy == 'assalamualaikum') {
				freply(`Waalaikumsalam, Ada Yang Bisa Saya Bantu? kalo Bingung Ketik ${prefix}menu Ya Kak`)
			}
			if (budy == 'Assalamualaikum') {
				freply(`Waalaikumsalam, Ada Yang Bisa Saya Bantu? kalo Bingung Ketik ${prefix}menu Ya Kak`)
			}
			if (budy == 'Terimakasih') {
				freply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'terimakasih') {
				freply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'makasih') {
				freply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'Thanks') {
				freply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'thanks') {
				freply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'Tq') {
				freply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'tq') {
				freply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}     
			//
if (budy.startsWith('>')){
			
if(!mek.key.fromMe && !isOwner) return fakestatus(mess.only.owner)
				
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
				
try{
reply(require('util').format(await eval(`;(async () => { ${budy.slice(2)} })()`)))
}catch(err){
	e = String(err)
reply(e)
	
}

}

if (budy.startsWith('x')){

try {
if (!mek.key.fromMe && !isOwner) return fakestatus(mess.only.owner)

return hydra.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})

} 
catch(err) {
e = String(err)

reply(e)

}

}  

        
if (budy.startsWith("$ ")){
if (!mek.key.fromMe && !isOwner) return fakestatus(mess.only.owner)
           	console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Dari owner ni`))
           	exec(budy.slice(2), (err, stdout) => {
           	if (err) return reply(`${err}`)
           	if (stdout) reply(`${stdout}`)
           	})
            }
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
freply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
freply(String(e))
}
}

}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
console.log('Message : %s', color(e, 'green'))
console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     hydra.sendMessage(`${owner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer CodeXTeam",body:"",previewType:"PHOTO",thumbnail:thumb,sourceUrl:"https://youtu.be/O91DT1pR1ew"}}})
}
}
}

   
