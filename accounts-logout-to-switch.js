function isMergeable(user) {
  // A user should be merged if they have never logged in. If they have
  // never logged in, they won't have a "resume" service.
  return !(user.services && user.services.resume);
}

var mergeUserErrorReason = 'New login not needed. Service will be added to logged in user.';
AccountsMultiple.register({
  validateSwitch: function(attemptingUser, attempt) {
    if (! isMergeable(attempt.user)) {
      throw new Meteor.Error('user-exists-logout-first', "That user already has an account. To switch to that account, logout first.");
    }
    return true;
  },
});
