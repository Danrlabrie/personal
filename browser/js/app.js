'use strict';

//hide loader
document.getElementById('preloader').style.display = "none";

window.app = angular.module('Main', ['ui.router', 'd3', 'duScroll','ngAnimate']);

app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');
});

