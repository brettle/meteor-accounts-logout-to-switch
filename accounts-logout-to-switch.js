"use strict";
/* globals AccountsLogoutToSwitch: true, AccountsMultiple, LoginState */
function AccountsLogoutToSwitchConstructor() {
  AccountsMultiple.register({
    validateSwitch: function(attemptingUser, attempt) {
      if (LoginState.signedUp(attemptingUser) && ! isMergeable(attempt.user)) {
        throw new Meteor.Error('user-exists-logout-first',
          "That user already has an account. " +
          "To switch to that account, sign out first.");
      }
      return true;
    },
  });
  function isMergeable(user) {
    // A user should be merged if they have never logged in. If they have
    // never logged in, they won't have a "resume" service.
    return !(user.services && user.services.resume);
  }
}

AccountsLogoutToSwitch = new AccountsLogoutToSwitchConstructor();
