const Botmaster = require('botmaster');

const {telegramSettings} = require('./telegram');

const botsSettings = [{telegram: telegramSettings}];

const botmaster = () => new Promise( (resolve, reject) => {
    const botmaster = new Botmaster({botsSettings});
    botmaster.on('server running', () => resolve(botmaster));
    botmaster.on('error', reject);
});

module.exports = {botmaster};
