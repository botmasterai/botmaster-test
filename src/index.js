const {botmaster} = require('./botmaster');
const {
    incomingUpdate,
    incomingMessage,
    outgoingMessage,
    telegramBot,
    telegramMock,
    respond
} = require('./telegram');





module.exports = {
    incomingUpdate,
    outgoingMessage,
    incomingMessage,
    telegramBot,
    botmaster,
    telegramMock,
    respond
};
