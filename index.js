const request = require('request-promise');
const q = require('daskeyboard-applet');
const logger = q.logger;

/**
 * Retrieve data from the service
 */
 async run() {
   new q.Point('#0000FF',q.Effects.BLINK)
 }

<<<<<<< HEAD

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
}

module.exports = {
  RedditNotification: RedditNotification
}

const applet = new RedditNotification();
=======
const applet = new TwitchStreams();
>>>>>>> dd59059c00c6b01dbe4bd8a66a3459bf1d5d1d80
