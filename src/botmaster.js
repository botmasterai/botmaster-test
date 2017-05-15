const Botmaster = require('botmaster');

const {telegramSettings} = require('./telegram');
const { TelegramBot } = require('botmaster-telegram')

const botmaster = () => new Promise( (resolve, reject) => {
    const botmaster = new Botmaster();
    botmaster.addBot(new TelegramBot(telegramSettings))
    botmaster.on('server running', () => resolve(botmaster));
    botmaster.on('error', reject);
});

module.exports = {botmaster};
