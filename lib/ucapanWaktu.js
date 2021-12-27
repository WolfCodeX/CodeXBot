const axios = require("axios");
const fs = require("fs-extra")
const fetch = require('node-fetch')
const moment = require("moment-timezone")
const PhoneNumber = require('awesome-phonenumber')

var ase = new Date();
var waktoo = ase.getHours();
switch(waktoo){
case 0: waktoo = 'Waktu Tengah Malam😴'; break;
case 1: waktoo = 'Waktu Tengah Malam😴'; break;
case 2: waktoo = 'Waktu Dini Hari🌟’'; break;
case 3: waktoo = 'Waktu Dini Hari🌟“'; break;
case 4: waktoo = 'Selamat Subuh kak🌛”'; break;
case 5: waktoo = 'Selamat Subuh kak🌛”'; break;
case 6: waktoo = 'Selamat Pagi kak🌝'; break;
case 7: waktoo = 'Selamat Pagi kak🌝'; break;
case 8: waktoo = 'Selamat Pagi kak🌝'; break;
case 9: waktoo = 'Selamat Pagi kak🌝'; break;
case 10: waktoo = 'Selamat Pagi kak✨'; break;
case 11: waktoo = 'Selamat Siang Kak☀️'; break;
case 12: waktoo = 'Selamat Siang Kak☀️'; break;
case 13: waktoo = 'Selamat Siang Kak☀️'; break;
case 14: waktoo = 'Selamat Siang Kak☀️'; break;
case 15: waktoo = 'Selamat Sore Kak⛅'; break;
case 16: waktoo = 'Selamat Sore Kak⛅'; break;
case 17: waktoo = 'Selamat Sore Kak⛅'; break;
case 18: waktoo = 'Waktu Magrib🌦'; break;
case 19: waktoo = 'Waktu Magrib🌦️'; break;
case 20: waktoo = 'Selamat Malam🌚'; break;
case 21: waktoo = 'Selamat Malam🌚'; break;
case 22: waktoo = 'Selamat Malam🌚'; break;
case 23: waktoo = 'Tengah Malam🌚'; break;
}
var tampilUcapan = '' + waktoo; 
var ase = new Date();
var waktoonyabro = ase.getHours();
switch(waktoonyabro){
case 0: waktoonyabro = `Selamat Malam`; break;
case 1: waktoonyabro = `Selamat Malam`; break;
case 2: waktoonyabro = `Selamat Malam`; break;
case 3: waktoonyabro = `Selamat Pagi`; break;
case 4: waktoonyabro = `Selamat Pagi`; break;
case 5: waktoonyabro = `Selamat Pagi`; break;
case 6: waktoonyabro = `Selamat Pagi`; break;
case 7: waktoonyabro = `Selamat Pagi`; break;
case 8: waktoonyabro = `Selamat Pagi`; break;
case 9: waktoonyabro = `Selamat Pagi`; break;
case 10: waktoonyabro = `Selamat Pagi`; break;
case 11: waktoonyabro = `Selamat Siang`; break;
case 12: waktoonyabro = `Selamat Siang`; break;
case 13: waktoonyabro = `Selamat Siang`; break;
case 14: waktoonyabro = `Selamat Siang`; break;
case 15: waktoonyabro = `Selamat Sore`; break;
case 16: waktoonyabro = `Selamat Sore`; break;
case 17: waktoonyabro = `Selamat Sore`; break;
case 18: waktoonyabro = `Selamat Malam`; break;
case 19: waktoonyabro = `Selamat Malam`; break;
case 20: waktoonyabro = `Selamat Malam`; break;
case 21: waktoonyabro = `Selamat Malam`; break;
case 22: waktoonyabro = `Selamat Malam`; break;
case 23: waktoonyabro = `Selamat Malam`; break;
}
var ucapanFakereply = '' + waktoonyabro;                                                                                      
                                                                                                                                                                                                                                                         
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



module.exports = { 

calender, 

week,

weton,

jmn,
waktoonyabro,
waktoo

}
