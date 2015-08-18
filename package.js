"use strict";

Package.describe({
  name: 'brettle:accounts-logout-to-switch',
  version: '0.3.0',
  summary: 'Requires that non-anonymous users logout before they login to ' +
    'another existing account.',
  git: 'https://github.com/brettle/meteor-logout-to-switch.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4');
  api.use('brettle:accounts-multiple@0.0.1', 'server');
  api.use('underscore', 'server');
  api.export('AccountsLogoutToSwitch');
  api.addFiles('accounts-logout-to-switch.js', 'server');
});

Package.onTest(function(api) {
  api.versionsFrom('1.0.4');
  api.use('tinytest');
  api.use('brettle:accounts-logout-to-switch');
  api.use('brettle:accounts-testing-support');
  api.use('brettle:accounts-anonymous');
  api.use('brettle:accounts-multiple@0.1.0');
  api.use('accounts-base', 'server');
  api.addFiles('accounts-logout-to-switch-tests.js', 'server');
});
