//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Dominic" //ur yt chanel name
global.socialm = "GitHub: Dominican643" //ur github or insta name
global.location = "Nigeria, Abuja, Apo" //ur location

//new
global.botname = '𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇 𝞑𝞗𝙏' //ur bot name
global.ownernumber = '2349063382597' //ur owner number
global.ownername = '𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇 𝞖𝞘𝞛𝙎𝞢𝙇𝙁' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://wa.me/2349063382597"
global.themeemoji = '🧎'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "𝞑𝞢𝙇𝞗𝞜𝙂𝙎 𝙏𝞗"
global.author = "𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇"
global.creator = "2349063382597@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2349063382597"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true  //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('https://telegra.ph/file/0fdb73de2f264e11ab2cf.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
