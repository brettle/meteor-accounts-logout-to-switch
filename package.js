"use strict";

Package.describe({
  name: 'brettle:accounts-logout-to-switch',
  version: '0.4.1',
  summary: 'Requires that signed up users sign out before they sign in to ' +
    'another existing account.',
  git: 'https://github.com/brettle/meteor-accounts-logout-to-switch.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4');
  api.use('brettle:accounts-multiple@0.0.1', 'server');
  api.use('brettle:accounts-login-state@0.0.2', 'server');
  api.use('underscore', 'server');
  api.export('AccountsLogoutToSwitch');
  api.addFiles('accounts-logout-to-switch.js', 'server');
});

Package.onTest(function(api) {
  api.versionsFrom('1.0.4');
  api.use('tinytest');
  api.use('ddp');
  api.use('brettle:accounts-logout-to-switch');
  api.use('brettle:accounts-testing-support');
  api.use('brettle:accounts-anonymous');
  api.use('brettle:accounts-multiple@0.1.0');
  api.use('service-configuration', 'server');
  api.use('accounts-base', 'server');
  api.addFiles('accounts-logout-to-switch-tests.js', 'server');
});
