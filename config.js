const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/867447d51339ecb81ffae.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50942165713";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_45_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDYyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDY2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU3LFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhLV3FHU3k5TVI4VktYYnpNTjhkSFJNSi8xVW5leDEzV3ZKL1dLQ0tKRm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInYwMHJrTjlGUUlLME1hQ2JEWE5WQWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTRiOTM5ZTUtYTA3NC00MDA3LTk1YzMtMWJhOGIxYmJmMDhlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDI0MyxcbiAgICAgIDIyMSxcbiAgICAgIDU3LFxuICAgICAgMTExLFxuICAgICAgOTksXG4gICAgICAxNzgsXG4gICAgICAyMTMsXG4gICAgICAyMCxcbiAgICAgIDkxLFxuICAgICAgMjA4LFxuICAgICAgMjA4LFxuICAgICAgMTg2LFxuICAgICAgOSxcbiAgICAgIDgsXG4gICAgICAxMTksXG4gICAgICAyNTQsXG4gICAgICAxLFxuICAgICAgMjQwLFxuICAgICAgMTg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDEwLFxuICAgICAgMjUxLFxuICAgICAgMjMxLFxuICAgICAgMTM2LFxuICAgICAgMjAwLFxuICAgICAgMTEwLFxuICAgICAgMTMwLFxuICAgICAgMjA5LFxuICAgICAgMTk2LFxuICAgICAgMTMyLFxuICAgICAgOTksXG4gICAgICA4LFxuICAgICAgNzgsXG4gICAgICA0NCxcbiAgICAgIDIxLFxuICAgICAgMTc4LFxuICAgICAgMTg1LFxuICAgICAgMTk0LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlY3Q0ZUQkNTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODI5NTEwOTgxMzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUzMTcxODg4NDcyMjAwOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovanNyNERFSlBYMkxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK2txTVJ5TGlKdlBBbnRDUm9vQ3lLWFhDUy9HR3ZBKy9YRFlSbTFzRnpEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlWkJCOUMrNmJIWkZ2cG03b2NNYnN0bVhwWHJGMUdOVkN0WWppaUp3OVYxbzM5WEg5Y1ozWGZvem91NTk0SzZBeitmM1Q5QXhFNGdNWFA3TTFVUGNEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1Q3RKbnRXbWttRW15U1FCRjlGRXdYaCtSVG9KbG44UVdLRENjWjhnMXFNZHZhQisyTDYycXVXZjJLWEJmRmtCSnArSFZoOSt5cW9VMnZ2WEZTdFlodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODI5NTEwOTgxMzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMyMTQ3NDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCTHFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJMcS5qc29uIjogIntcImtleURhdGFcIjpcIk5aTFMvR1Q0M0xOcnp0ak9yQkRmTnRwaGhwVzhlbHVlT2VKd2tkZ2hFcjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTM2MTYxNjkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "亗⛃⃟☬𝓛𝓸𝓻𝓭𝓮𝓼𝓼☬۞♗𝓰άï𝔞☬𝄟✮⃝ ",
  packname: process.env.PACK_NAME || "亗⛃⃟☬𝓛𝓸𝓻𝓭𝓮𝓼𝓼☬۞♗𝓰άï𝔞☬𝄟✮⃝ ",
  botname : process.env.BOT_NAME  || "亗⛃⃟☬𝓛𝓸𝓻𝓭𝓮𝓼𝓼☬۞♗𝓰άï𝔞☬𝄟✮⃝ ",
  ownername:process.env.OWNER_NAME|| "𝐉𝚯𝐊𝚵𝚪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
