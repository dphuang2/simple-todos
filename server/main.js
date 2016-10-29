import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import '../imports/api/tasks.js';


Meteor.startup(() => {
  // code to run on server at startup
  Accounts.config({
    restrictCreationByEmailDomain: 'illinois.edu',
    sendVerificationEmail: true,
  })
});
