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


if (r.getUser('Tight-Document').has_mail) {
  console.log("You have mail!");
}

const request = require('request-promise');
const q = require('daskeyboard-applet');
const logger = q.logger;


class RedditNotification extends q.DesktopApp {
  constructor() {
    super();
    // store a record of previously notified deals
    this.notified = {};
    // run every 5 min
    this.pollingInterval = 5 * 60 * 1000;
  }

  async applyConfig() {
    const userLogins = this.config.userLogins;

    if (userLogins) {
      logger.info("My user logins are: " + JSON.stringify(userLogins));

      for (let login of userLogins) {
        if (null == login || login.trim() == '') {
          throw new Error("User logins must not be empty.")
        }
      }
    }
  }


generateSignal(data) {
    for (let stream of data.data) {
        return new q.Signal({
          points: [
            [
              new q.Point('#FF0000',q.Effects.BLINK)
            ]
          ]
        });
      }
    return null;
  }

  async run() {
    const userLogins = this.config.userLogins;

    if (userLogins) {
      logger.info("My user logins are: " + JSON.stringify(userLogins));

      return retrieveData(userLogins)
        .then(body => {
          return this.generateSignal(body);
        }).catch(error => {
          logger.error(`Error while getting Twitch data: ${error}`);
          if(`${error.message}`.includes("getaddrinfo")){
          }else{
            return q.Signal.error([`The Reddit service returned an error. Detail: ${error}`]);
          }
        });
    } else {
      logger.warn("No userLogins configured.");
      return null;
    }
  }
}

module.exports = {
  RedditNotification: RedditNotification,
  retrieveData: retrieveData,
}

const applet = new RedditNotification();
