# accounts-logout-to-switch
============

Requires that non-anonymous users logout before they login to another existing account.

## Features

- When a logged in non-anonymous user tries to login using credentials that belong to another
  existing user, the login is canceled and the user is told that they need to
  logout first. This is useful to prevent "Add Foo Service" or "Login with Foo"
  buttons from causing the user to switch accounts instead of adding a service
  to an existing account.

- Works with any login service (accounts-password, acccounts-google, etc.)

- Works with accounts-ui and other similar packages.

- Does not permanently monkey patch Meteor core.

## Installation
```sh
meteor add brettle:accounts-logout-to-switch
```

## Usage

Nothing to do. It should just work once it is installed.
