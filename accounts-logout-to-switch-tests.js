Tinytest.add('AccountsLogoutToSwitch - logged out user logging in succeeds', function (test) {
  AccountsMultiple._unregisterAll();
  AccountsLogoutToSwitch._init();
  var connection = DDP.connect(Meteor.absoluteUrl());

  Meteor.users.remove({ 'services.test1.name': "testname" });
  var testId = connection.call('login', { test1: "testname" }).id;
  test.isNotUndefined(testId);
  test.isNotNull(testId);
});

Tinytest.add('AccountsLogoutToSwitch - non-anonymous user logging in as an new user switches', function (test) {
  AccountsMultiple._unregisterAll();
  AccountsLogoutToSwitch._init();
  var connection = DDP.connect(Meteor.absoluteUrl());

  Meteor.users.remove({ 'services.test1.name': "testname"});
  var testId = connection.call('login', { test1: "testname" }).id;
  test.isNotUndefined(testId);
  test.isNotNull(testId);
  var user = Meteor.users.findOne(testId);
  test.isUndefined(user.services.test2);

  Meteor.users.remove({ 'services.test2.name': "test2name"});
  var newTest2Id = connection.call('login', { test2: "test2name" }).id;
  test.notEqual(newTest2Id, testId, 'not test id');
});

Tinytest.add('AccountsLogoutToSwitch -  non-anonymous user logging in as an existing user must logout first', function (test) {
  AccountsMultiple._unregisterAll();
  AccountsLogoutToSwitch._init();
  var connection = DDP.connect(Meteor.absoluteUrl());

  Meteor.users.remove({ 'services.test2.name': "test2name"});
  var test2Id = connection.call('login', { test2: "test2name" }).id;
  test.isNotUndefined(test2Id);
  test.isNotNull(test2Id);

  connection.call('logout');
  Meteor.users.remove({ 'services.test1.name': "testname"});
  var testId = connection.call('login', { test1: "testname" }).id;
  test.isNotUndefined(testId);
  test.isNotNull(testId);
  var user = Meteor.users.findOne(testId);
  test.equal(user.services.test1.name, 'testname');

  test.throws(function () {
    connection.call('login', { test2: "test2name" }).id;
  }, 'logout first');
});

Tinytest.add('AccountsLogoutToSwitch - anonymous user logging in as an new user switches', function (test) {
  AccountsMultiple._unregisterAll();
  AccountsLogoutToSwitch._init();
  var connection = DDP.connect(Meteor.absoluteUrl());

  var anonId = connection.call('login', { anonymous: true }).id;
  test.isNotUndefined(anonId);
  test.isNotNull(anonId);
  var user = Meteor.users.findOne(anonId);
  test.isUndefined(user.services.test2);

  Meteor.users.remove({ 'services.test2.name': "test2name"});
  var newTest2Id = connection.call('login', { test2: "test2name" }).id;
  test.notEqual(newTest2Id, anonId, 'not test id');
});

Tinytest.add('AccountsLogoutToSwitch -  anonymous user logging in as an existing user switches', function (test) {
  AccountsMultiple._unregisterAll();
  AccountsLogoutToSwitch._init();
  var connection = DDP.connect(Meteor.absoluteUrl());

  Meteor.users.remove({ 'services.test2.name': "test2name"});
  var test2Id = connection.call('login', { test2: "test2name" }).id;
  test.isNotUndefined(test2Id);
  test.isNotNull(test2Id);

  connection.call('logout');
  var anonId = connection.call('login', { anonymous: true }).id;
  test.isNotUndefined(anonId);
  test.isNotNull(anonId);
  var user = Meteor.users.findOne(anonId);

  connection.call('login', { test2: "test2name" }).id;
  var newTest2Id = connection.call('login', { test2: "test2name" }).id;
  test.notEqual(newTest2Id, anonId, 'not test id');
});
