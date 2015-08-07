var mergeUserErrorReason = 'New login not needed. Service will be added to logged in user.';
AccountsMultiple.register({
  validateSwitch: function(attemptingUser, attempt) {
    if (! isAnonymous(attemptingUser) && ! isMergeable(attempt.user)) {
      throw new Meteor.Error('user-exists-logout-first', "That user already has an account. To switch to that account, logout first.");
    }
    return true;
  },
});

function isAnonymous(user) {
  // A user is a guest if they don't have any services other than "resume"
  return (user.services && _.size(user.services) === 1 && user.services.resume);
};

function isMergeable(user) {
  // A user should be merged if they have never logged in. If they have
  // never logged in, they won't have a "resume" service.
  return !(user.services && user.services.resume);
}
