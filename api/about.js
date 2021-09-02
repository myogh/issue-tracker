const { mustBeSignedIn } = require('./auth.js');

let aboutMessage = 'Issue Tracker API v1.0';

// resolver func for setAboutMessage field
function setAboutMessage(_, { message }) {
  aboutMessage = message;
  return aboutMessage;
}

function getMessage() {
  return aboutMessage;
}

module.exports = {
  setAboutMessage: mustBeSignedIn(setAboutMessage),
  getMessage,
};
