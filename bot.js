

// const express = require('express');
// const bodyParser = require('body-parser');
// const { Telegraf } = require('telegraf');
const replies = require('./replies'); // Import the replies from reply.js
const BOT_TOKEN = "7899244466:AAHcLOZu0dhZQWYkviKnlWJvJQh5Gk3whx4";

// const bot = new Telegraf(BOT_TOKEN);
 function startBot(){
// // Helper function to get a random reply
 function getRandomReply(message) {
   const key = message.toLowerCase();
   if (replies[key]) {
    const options = replies[key];
    return options[Math.floor(Math.random() * options.length)];
  }
  return " ";
}

// // Function to generate random love percentage
//   function getLoveIndicator(lovePercentage) {
//       const totalBars = 10;  // Total segments in the love bar
//       const filledBars = Math.round(lovePercentage / 10);  // Determine how many segments to fill
//       const emptyBars = totalBars - filledBars;

//       const loveBar = '─'.repeat(filledBars) + '♡' + '─'.repeat(emptyBars);

//       return `${lovePercentage}% ${loveBar} 100%`;
//   }

// // Handle text messages
// bot.on('text', async (ctx) => {
//   try {
//     const userMessage = ctx.message.text.toLowerCase();

//     // Check if the message is a love command
//     if (userMessage.startsWith('love')) {
//       const messageParts = userMessage.split(' ');
//       const firstMember = messageParts[1]; // Get the first mentioned member
//       const secondMember = messageParts[2]; // Get the second mentioned member

//       // Extract names without '@' symbol
//       const firstName = firstMember ? firstMember.replace('@', '') : '';
//       const secondName = secondMember ? secondMember.replace('@', '') : '';

//       if (firstName && secondName) {
//         const lovePercentage = getRandomLovePercentage(); // Generate random percentage
//         const loveEmoji = getLoveEmoji(lovePercentage); // Get the appropriate emoji

//         const replyMessage = `❤️ Love Between ${firstName} and ${secondName} is ${getLoveIndicator}% ${loveEmoji}`;

//         // Only send non-empty messages
//         if (replyMessage.trim() !== "") {
//           await ctx.reply(replyMessage); // Use async/await to send the reply
//         } else {
//           throw new Error("Reply message is empty");
//         }
//       } else {
//         await ctx.reply("Please Mention Lovers' Names like this: type👉 love @yourName @friendName\n\n𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗦𝗨𝗖𝗛𝗜 & 𝗧𝗢𝗚𝗘𝗧𝗛𝗘𝗥\n𝗠𝗔𝗗𝗘 𝗪𝗜𝗧𝗛 ❤️ 𝗕𝗬 𝗗𝗜𝗠𝗠𝗜");
//       }

      
//     } else {
//       // If not a love command, get a random reply from predefined replies
//       const reply = getRandomReply(userMessage);

//       // Only send non-empty messages
//       if (reply.trim() !== "") {
//         await ctx.reply(reply);
//       } else {
//         throw new Error("Reply message is empty");
//       }
//     }
//   } catch (error) {
//     console.error("Error sending message:", error);
//   }
// });

// // Launch the bot
// bot.launch();
//   console.log(' bot is runnng...');
// };

// module.exports = startBot;


const { Telegraf, Markup } = require('telegraf');

// Initialize bot
const bot = new Telegraf(BOT_TOKEN);

// Function to generate random love percentage
function getRandomLovePercentage() {
    return Math.floor(Math.random() * 101);  // Random percentage between 0 and 100
}

// Function to generate love indicator
function getLoveIndicator(lovePercentage) {
    const totalBars = 10;  // Total segments in the love bar
    const filledBars = Math.round(lovePercentage / 10);  // Determine how many segments to fill
    const emptyBars = totalBars - filledBars;

    const loveBar = '─'.repeat(filledBars) + '♡' + '─'.repeat(emptyBars);

    return `${lovePercentage}% ${loveBar} 100%`;
}

// Event listener for messages
bot.on('text',async (ctx) => {
  try{
    const userMessage = ctx.message.text.toLowerCase();

    // Check if the message is a love command (e.g. "/love @user1 @user2")
    if (userMessage.startsWith('/love')) {
        const messageParts = userMessage.split(' ');

        if (messageParts.length === 3) {
            const firstMember = messageParts[1]; // First user mentioned
            const secondMember = messageParts[2]; // Second user mentioned

            const firstName = firstMember.replace('@', ''); // Remove '@' from the username
            const secondName = secondMember.replace('@', '');

            if (firstName && secondName) {
                const lovePercentage = getRandomLovePercentage(); // Generate random love percentage
                const loveIndicator = getLoveIndicator(lovePercentage); // Generate love indicator

                // Create a message and button with the love indicator
                const loveMessage = `❤️ 𝗟𝗼𝘃𝗲 𝗕𝗲𝘁𝘄𝗲𝗲𝗻 ${firstName} 𝗔𝗻𝗱 ${secondName} 🥰`;

                // Send the message with the inline button containing the love indicator
                ctx.reply(
                    loveMessage, 
                    Markup.inlineKeyboard([
                        Markup.button.callback(loveIndicator, 'love_indicator')
                    ])
                );
            } else {
                ctx.reply('Please mention two users like this: love @firstUser @secondUser');
            }
        } else {
ctx.reply("𝗣𝗹𝗲𝗮𝘀𝗲 𝗠𝗲𝗻𝘁𝗶𝗼𝗻 𝗟𝗶𝗸𝗲 𝗧𝗵𝗶𝘀:👉\n\n/love @yourName @crushName \n\n𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗚𝗘𝗧𝗛𝗘𝗥\n𝗠𝗔𝗗𝗘 𝗪𝗜𝗧𝗛 ❤️ 𝗕𝗬 𝗗𝗜𝗠𝗠𝗜");
        }
    } else  if (userMessage === '/admin') {
      // If the message is /admin, send the admin section message
      const adminMessage = `
𝘄𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗳𝗼𝗿𝗲𝘃𝗲𝗿 𝘁𝗼𝗴𝗲𝘁𝗵𝗲𝗿\n\n𝗢𝘄𝗻𝗲𝗿 :- @It_mukti67 \n\n𝗔𝗻𝘆 𝗗𝗼𝘂𝗯𝘁 #𝗗𝗠 @webg_0x 𝗮𝗻𝗱 @mahi_darbar05 \n\nɢʀᴏᴜᴘ ʀᴜʟᴇꜱ -
\n1. ᴀᴅᴍɪɴꜱ ʀ ɴᴏᴛ ʀᴇꜱᴘᴏɴꜱɪʙʟᴇ ғᴏʀ ᴄᴏɴᴛᴇɴᴛ. ɪᴛꜱ ᴘᴜʙʟɪᴄ ɢʀᴏᴜᴘ.
\n2. ɴᴏ ᴀʙᴜꜱᴇꜱ & ʜᴀᴛᴇ ᴛᴏᴡᴀʀᴅꜱ ᴀ ʀᴇʟɪɢɪᴏᴜꜱ ᴄᴏᴍᴍᴜɴɪᴛʏ.
\n3. ɴᴏ ᴘʀᴏᴍᴏᴛɪᴏɴ ʟɪɴᴋꜱ
\n4. 12 ʙᴀᴊᴇ ᴋᴇ ʙᴀᴀᴅ ɴᴏ ᴠᴄ
\n5 ᴛʜɪꜱ ɪꜱ ᴘᴜʙʟɪᴄ ɢʀᴏᴜᴘ. ᴇᴠᴇʀʏᴛʜɪɴɢ ᴅᴏɴᴇ ʜᴇʀᴇ ɪꜱ ʀᴇᴄᴏʀᴅᴇᴅ, ꜱᴏ ꜱᴘᴇᴀᴋ ᴄᴀʀᴇғᴜʟʟʏ.\n\n Try /love 🥰`;
      await ctx.reply(adminMessage);
    }else {
    const reply = getRandomReply(userMessage);

        // Only send non-empty messages
        if (reply.trim() !== "") {
          await ctx.reply(reply);
        } else {
          throw new Error("Reply message is empty");
        }
      }
    } catch (error) {
     // console.error("Error sending message:", error);
    }
  
  // ctx.reply(reply);
});

// Launch the bot
bot.launch();
console.log('Bot is running...');
 }
 module.exports = startBot;