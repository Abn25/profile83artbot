
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://fsbot.glitch.me/`);
}, 280000);
 
const replace = require("replace"); //npm i replace
const Discord = require("discord.js");
const replies = require("canvas-constructor");
const client = new Discord.Client();
const ros = require("ros");
const bot = new Discord.Client();
const hero = client;
const HypixelAPI = require("hypixel-api");
const Hypixel = new HypixelAPI("4856cc0d-031c-4b27-9d49-2edb7679853b");
const fs = require("fs");
const ms = require("ms");
const giphy = require("giphy-api")();
const googl = require("goo.gl");
const emojis = require("emojis");
const Data = require("data");
const os = require("os");
const Enmap = require("enmap");
const notes = new Enmap();
const translate = require("google-translate-api");
const UserBlocked = new Set();
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const message = require("message");
const { Client, Util } = require("discord.js");
const canvas = require("canvas");
const prettyMs = require("pretty-ms");
const sqlite = require("sqlite");
const moment = require("moment");
const { getInfoFromName } = require("myanimelists");
const pretty = require("pretty-ms");
const Jimp = require("jimp");
const superagent = require("superagent");
const hastebins = require("hastebin-gen");
const jimp = require("jimp");
const convert = require("hh-mm-ss");
const db = require("quick.db");
const google = require("google-it");
const fetchVideoInfo = require("youtube-info");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const simpleytapi = require("simple-youtube-api");
const opus = require("node-opus");
const guild = require("guild");
const ytdl = require("ytdl-core");
const figlet = require("figlet");
const botversion = require("./package.json").version;
const cmd = require("cmd");
const util = require("util");
const gif = require("gif-search");
const queue = new Map();
const rainbow = {};
const dateFormat = require("dateformat");
const { get } = require("snekfetch");
const invites = {};
const wait = require("util").promisify(setTimeout);
const cool = [];
const yt = require("ytdl-core");
const table = require("table");
const p = {};
const emoji = require("emoji");
const developers = ["599351862692544532 , 466140137483534338 "];
const devs = ["599351862692544532 , 466140137483534338"];
const { User, MessageMentions } = require("discord.js"); // Disocrd Package Classes
const Canvas = require("canvas-prebuilt"); // Canvas Package for photo stuffs
const SQLite = require("sqlite"); // SQLite Package to read & write to sql files and databases
const path = require("path"); // Path Package to get paths easily
var API = require("apextab-api");
var ApexTab_API = API.Apextab_API;
var movie = require("movie-info");
var commands = {};
var commandsCheck = [];

const prefix = "$";
require('events').EventEmitter.defaultMaxListeners = 15;
var mysql = require("mysql");
var ti = {},
  spee = {},
  attentions = {};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("");
  console.log("");
  console.log(
    "╔[═════════════════════════════════════════════════════════════════]╗"
  );
  console.log(`[Start] ${new Date()}`);
  console.log(
    "╚[═════════════════════════════════════════════════════════════════]╝"
  );
  console.log("");
  console.log("╔[═════════════════════════════════════]╗");
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log("");
  console.log(`Informations About ${client.user.username}:`);
  console.log("");
  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log(`Arch! [ " ${process.arch} " ]`);
  console.log(`Platform! [ " ${process.platform} " ]`);
  console.log(`Node Version! [ " ${process.version}" ]`);
  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " NodeJS " ]`);
  console.log(
    `Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`
  );
  console.log("╚[════════════════════════════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log(`${client.user.username} Is Online`);
  console.log("╚[════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log("Created By: Haru");
  console.log("╚[════════════]╝");
});



let luxy = JSON.parse(fs.readFileSync("./profile.json", "utf8"));
 client.on("message", message => {
   if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;

   if (!luxy[message.author.id]) luxy[message.author.id] = {
     points: 0,
     level: 1
   };
   let userData = luxy[message.author.id];
   userData.points++;
 
   let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
   if (curLevel > userData.level) {
     // Level up message
     userData.level = curLevel;
     message.channel.send(`**:up: | ${message.author.username} You leveled up to ${curLevel}**`);
   }
   if (message.content.startsWith(prefix + "level")) {
     message.channel.send(`**${message.author.username} You are level is ${userData.level}**`);
   }
   fs.writeFile("./profile.json", JSON.stringify(luxy), (err) => {
     if (err) console.error(err)
   });
 
 });
//profile
let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: '$title',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 1,
    points: 1,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith("$credits")) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith("$daily")) {

  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`** :atm: | ${message.author.username} you received your :yen: **310**daily credits!**`)}
 else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'credits')) {
          if (!args[0]) {
            message.channel.send(``);
         return;
           }
        // We should also make sure that args[0] is a number
    
 if(isNaN(args[0]) || args[0] < 0) return message.channel.send('?! try type this number!')
             if(profile[message.author.id].credits < args[0]) return message.channel.send("")
if(args[0].startsWith("$profile")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(``);
            if(defineduser.id === message.author.id) return message.channel.send("")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` **Amount :** \`${args}\` \n  **Type these numbers to confirm : ** \`${x[x3]}\` `).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            message.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
        
		




}

      });
client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using ArtBot"
        if(!tit) {
            message.channel.send("**:large_orange_diamond: $title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`** ~~Done~~** `)
        }
        }
        fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })
client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
            let user = message.mentions.users.first();
  var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
            if (!credits[getvalueof.id]) credits[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,tite: "$title [msg]", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
            const rg = ['p1.png'];
            fs.readFile(`${rg[Math.floor(Math.random() * rg.length)]}`, function (err, Background) {//امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300);
 
})

 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + "p1.png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        //ur name
                        ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '24px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 151, 165) // احداثيات اسمك
 
                        //ur name
                        ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${getvalueof.username}`, 149, 165) // احداثيات اسمك
 
                        //credit
                        ctx.font = "bold 12px Arial" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${credits[getvalueof.id].credits}`, 225, 145) // احداثيات المصاري
 
                        //poits
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${credits[getvalueof.id].points}`, 71, 145) // احداثيات النقاط
 
                        //Level
                        ctx.font = "bold 28px Arial" // نوع الخط و حجمه
                        ctx.fontSize = '30px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${credits[getvalueof.id].level}`, 228, 99) // احداثيات اللفل
 
                         //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${credits[getvalueof.id].tite}`, 151, 190) // احداثيات النقاط
 
                        //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${credits[getvalueof.id].tite}`, 150, 190) // احداثيات النقاط
 
                        // REP
                        ctx.font = "bold 24px  Arial";
                        ctx.fontSize = "40px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${credits[getvalueof.id].rep}`, 70,99)
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;   
                        ctx.beginPath();
                        ctx.beginPath();
                        ctx.arc(150, 100, 43, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 106, 57, 87, 86);
 
message.channel.startTyping();    
message.channel.stopTyping();
message.channel.sendFile(canvas.toBuffer())   
})
})
}
});

////
client.on('message',async message => { // تعريف ال message
    let alias = message.content.split(" ")[0].substring(prefix.length); // تعريف alias
    let args = message.content.split(" "); // أستخدام الأرجس
    let devs = ["532325977921945603","466140137483534338"]; // هنا تحط ايدي الديف الي مسموح لهم بـ زياده الكريدتس
    let mention = message.mentions.users.first() || message.author // تعريف المنشن
    if(alias === "addc") { // تعريف الكوماند
    let args = message.content.split(" "); //أستخدام الأرجس مره ثانيه
    if(!devs.includes(message.author.id)) return; // اذا واحد من الديف كتب الرسالة ولكن كانت فاضيه
    if(!args[1] || isNaN(args[1])) return message.reply("**Please Sir, Can you Type A Credits?**") // يرد عليه ويقله اكتب الكريدتس
    if(!profile[mention.id]) return; // هنا لو منشن الشخص
    profile[mention.id].credits += (+args[1]); // يزيد له  العدد
    fs.writeFileSync("./cr.json", JSON.stringify(profile));  // هنا يسجل بـ الجسون 
    console.log(profile[mention.id]) // هنا يكتب بلكاونسل بأنه زاد كريدتس للشخص الي منشنه او لنفسه
    message.reply(`**Done Sir!, I Have been Adedd Money For you!  : \`${args[1]}\`**`); // هنا يرد عليه بأنه زاد و العدد
    }
});





client.login('')