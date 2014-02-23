angular-lo-dash [![Build Status](https://travis-ci.org/intelligentgolf/angular-lo-dash.png?branch=master)](https://travis-ci.org/intelligentgolf/angular-lo-dash)
===============

A tiny AngularJS module to make the lo-dash global object available to the AngularJS DI system.

Usage
-----

Add the dependency to your AngularJS app:

    // Add module dependency 
    angular.module('myApp', ['angular-lo-dash']);
    
Then use it by injecting `_` into your services, controllers, or directives:

    angular.service('MyService', function(_) {

    });
