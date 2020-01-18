'use strict';
import creds;
const snoowrap = require('snoowrap');



// Create a new snoowrap requester with OAuth credentials.
// For more information on getting credentials, see here: https://github.com/not-an-aardvark/reddit-oauth-helper
const r = new snoowrap({
  userAgent: creds.userAgent,
  clientId: creds.clientId,
  clientSecret: creds.clientSecret,
  refreshToken: creds.refreshToken'
});

// Alternatively, just pass in a username and password for script-type apps.
const otherRequester = new snoowrap({
  userAgent: 'put your user-agent string here',
  clientId: 'put your client id here',
  clientSecret: 'put your client secret here',
  username: 'put your username here',
  password: 'put your password here'
});
