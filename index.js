const fs = require('fs');
const startBot = require('./bot');
const { Telegraf } = require('telegraf');
const bot = new Telegraf('6291099380:AAF8tk2xenBriZ7QdRcGbtu8wc5apzl3Ibw');
const replies = require('./replies');
const express = require('express');
const app = express();
// Helper function to save replies
function saveRepliesToFile() {
    fs.writeFileSync('./replies.js', `module.exports = ${JSON.stringify(replies, null, 2)};`, 'utf8');
}

// Temporary object to track the first message (question)
// let lastQuestion = null;

// bot.on('text', (ctx) => {
//     const userMessage = ctx.message.text.toLowerCase();

//     // Check if there's already a question waiting for a reply
//     if (lastQuestion === null) {
//         // Store the first message as a question
//         lastQuestion = userMessage;
//         //ctx.reply('Got the question. Waiting for the reply...');
//     } else {
//         // If a question exists, store the current message as a reply
//         if (!replies[lastQuestion]) {
//             replies[lastQuestion] = []; // Create an array for replies if it doesn't exist
//         }
//         replies[lastQuestion].push(userMessage); // Add the reply

//         // Save the updated replies to file
//         saveRepliesToFile();

//        console.log('Question and reply saved!');

//         // Reset the lastQuestion after saving
//         lastQuestion = null;
//     }
// });
// Temporary object to track the last user's message
let lastUserMessage = null;

bot.on('text', (ctx) => {
    const userMessage = ctx.message.text.toLowerCase();

    // Check if the user is responding to the last message
    if (lastUserMessage === null) {
        // Store the first user message
        lastUserMessage = userMessage;
        console.log('watting');
    } else {
        // Store the user's reply in the replies object
        if (!replies[lastUserMessage]) {
            replies[lastUserMessage] = []; // Create an array for replies if it doesn't exist
        }
        replies[lastUserMessage].push(userMessage); // Add the user's reply

        // Save the updated replies to file
        saveRepliesToFile();

        console.log('User message and reply saved!');

        // Reset the lastUserMessage after saving
        lastUserMessage = null;
      //  ctx.reply('done');
    }
});


bot.launch();
startBot();
console.log('Assistance bot is runnng...');
app.get('/', (req, res) => {
    res.send('Assistance bot is ing...');
})