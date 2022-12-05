'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const app = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

const bcrypt = require('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res);
  });
});

// async function getHash(pwd, round) {
//   try {
//     const res = await bcrypt.hash(pwd, round);
//     console.log('Hashed: ' + res);

//     return res;
//   } catch (err) {
//     console.log('Error: ' + err);

//     return err;
//   }
// }

// async function checkPwd(pwd) {
//   const hash = await getHash(myPlaintextPassword, saltRounds);

//   const isMatch = await bcrypt.compare(pwd, hash);

//   console.log('pass - ' + pwd + ': ' + isMatch);
// }

// checkPwd(myPlaintextPassword);
// checkPwd(someOtherPlaintextPassword);

//END_ASYNC

//START_SYNC
const syncHash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Sync hash: ' + syncHash);

const syncRes = bcrypt.compareSync(myPlaintextPassword, syncHash);
console.log('Sync res: ' + syncRes);
//END_SYNC

const port = process.env.PORT || 3000;
app.listen(port, () => {});
