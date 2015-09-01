# brettle:accounts-logout-to-switch

[![Build Status](https://travis-ci.org/brettle/meteor-accounts-logout-to-switch.svg?branch=master)](https://travis-ci.org/brettle/meteor-accounts-logout-to-switch)

Requires that users who have signed up (i.e. not anonymous/guest users) sign out
before they sign in to another existing account.

This package is part of the `brettle:accounts-*` suite of packages. See
[`brettle:accounts-deluxe`](https://atmospherejs.com/brettle/accounts-deluxe)
for an overview of the suite and a live demo.

## Features

- When a signed up user tries to sign in using credentials that belong to
  another existing user, this package denies the sign in with an error that
  tells the user  that they need to sign out first. This is useful to prevent
  "Add Some Service" or "Sign in with Some Service" buttons from causing the
  user to switch accounts instead of adding a service to an existing account.

- Works with any login service (accounts-password, acccounts-google, etc.)

- Works with accounts-ui and other similar packages.

- Uses the extensible
  [`brettle:accounts-login-state`](https://atmospherejs.com/brettle/accounts-login-state)
  package to determine whether a user has signed up.

- Does not permanently monkey patch Meteor core.

## Installation
```sh
meteor add brettle:accounts-logout-to-switch
```

## Usage

Nothing to do. It should just work once installed.
