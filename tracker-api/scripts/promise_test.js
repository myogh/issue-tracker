function getEmail(str) {
  return new Promise((resolve, reject) => {
    if (str.trim().length < 4) {
      reject(new Error('Invalid email.'));
    }
    console.log('Email set');
    resolve({ email: str });
  });
}

function getName(email) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    resolve(`user has mail ${email}`);
  });
}

getEmail('he')
  .then(data => getName(data.email))
  .then(data => console.log(data));
