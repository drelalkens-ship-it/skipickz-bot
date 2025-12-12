const TelegramBot = require("node-telegram-bot-api");

// IMPORTANT: Your real bot token will be added in Render, not here.
const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("❌ ERROR: BOT_TOKEN is not set in environment variables.");
  process.exit(1);
}

// Enable long polling to receive Telegram messages
const bot = new TelegramBot(token, { polling: true });

// /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name || "friend";

  const text =
    `👋 Hello ${firstName}! I am **Skipickz**.\n\n` +
    `Right now I am in testing mode.\n\n` +
    `Soon you will get:\n` +
    `• AI-powered match predictions\n` +
    `• Image & screenshot match analysis\n` +
    `• Real-time football news\n` +
    `• Clean, simple and professional insights\n\n` +
    `Type /help for more information.`;

  bot.sendMessage(chatId, text, { parse_mode: "Markdown" });
});

// /help command
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;

  const text =
    `🤖 **Skipickz Help Menu**\n\n` +
    `/start – Restart the bot\n` +
    `/help – Show this menu\n\n` +
    `Coming soon:\n` +
    `• €30/month subscription system\n` +
    `• 3-hour free trial\n` +
    `• Multi-level referral system (10% / 5% / 2%)\n` +
    `• AI match predictions & previews\n` +
    `• Screenshot & photo match analysis\n` +
    `• Live football news\n\n` +
    `Stay tuned!`;

  bot.sendMessage(chatId, text, { parse_mode: "Markdown" });
});

// Log all messages (for debugging)
bot.on("message", (msg) => {
  console.log("💬 Received message:", msg.text);
});
