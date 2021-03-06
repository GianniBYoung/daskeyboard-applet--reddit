const q = require('daskeyboard-applet');
const logger = q.logger;
const snoowrap = require('snoowrap');

const r = new snoowrap({
  userAgent: 'copmuter',
      clientId: '81RAdGNDkcEjow',
      clientSecret: 'yeG6ghwpfTXh7bmVS4n6K5zCur0',
      refreshToken: '429012468801-_EAaoeTkviXImAvm2-YQyV0j_nM',
});


class RedditNotification extends q.DesktopApp {
  constructor() {
    super();
    this.pollingInterval = 15 * 1000;
  }

  async run() {
    if (r.getUser('Tight-Document').has_mail) {
      return new q.Signal({
        points: [
          [
            new q.Point('#FF0000',q.Effects.BLINK)
          ]
        ],
        name:'Unread Reddit Messages: ',
        message: 'Sender of most recent message: ',
      });
    } else {
      return new q.Signal({
        points: [
          [
            new q.Point('#000000',q.Effects.BREATHE)
          ]
        ],
      });
    }

}
}

module.exports = {
  RedditNotification: RedditNotification
}

const applet = new RedditNotification();
