//'use strict';
//const request = require('request-promise');
//const snoowrap = require('snoowrap');
const q = require('daskeyboard-applet');
const logger = q.logger;

/**
 *
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
*
**/


//if (r.getUser('Tight-Document').has_mail) {
//  console.log("You have mail!");
//}



class RedditNotification extends q.DesktopApp {
  constructor() {
    super();
    // store a record of previously notified deals
    //this.notified = {};
    // run every 5 min
    //this.pollingInterval = 5 * 60 * 1000;
  }

  async run() {
    return new q.Signal({
      points: [
        [
          new q.Point('#FF0000',q.Effects.BLINK)
        ]
      ]
    });
}

module.exports = {
  RedditNotification: RedditNotification
}

const applet = new RedditNotification();
