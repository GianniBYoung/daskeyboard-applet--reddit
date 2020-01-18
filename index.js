'use strict';
// import creds from 'creds.json';
// // var creds = require("./creds.json");
const snoowrap = require('snoowrap');

const r = new snoowrap({
  // userAgent: creds.userAgent,
  // clientId: creds.clientId,
  // clientSecret: creds.clientSecret,
  // refreshToken: creds.refreshToken
  userAgent: 'copmuter',
      clientId: '81RAdGNDkcEjow',
      clientSecret: 'yeG6ghwpfTXh7bmVS4n6K5zCur0',
      refreshToken: '429012468801-_EAaoeTkviXImAvm2-YQyV0j_nM',
});


r.getInbox().then(console.log)
