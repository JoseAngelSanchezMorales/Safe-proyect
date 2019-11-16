const config = require('../config/index');
const { accoud_sid, auth_token } = config.config;

const client = require('twilio')(accoud_sid, auth_token);

const sendSMS = (phone,name) => {
  client.messages
  .create({
    from: 'whatsapp:+14155238886',
    body: `Damos aviso que su familiar ${name}, le ha ocurrido un accidente, comunicarse al numero 14155238886 `,
    to: `whatsapp:+521${phone}`
  })
  .then(message => console.log(message.sid));
}

module.exports = sendSMS;