// File: application.js
var wcgUiRouterApplication = angular.module('wcgUiRouterApplication', ['ui.router']);

wcgUiRouterApplication.config(function($stateProvider, $urlRouterProvider) {
    
    
    $stateProvider
        .state('home', {
            //  Posts state. This state will contain nested views
            url: '/home'
            
        })

        $stateProvider
        .state('feedback', {
            //  Posts state. This state will contain nested views
            url: '/feedback',
            templateUrl: 'feedback.html'
        })
        
        $stateProvider
        .state('registerPlayer', {
            //  Posts state. This state will contain nested views
            url: '/registerPlayer',
            templateUrl: 'registerPlayer.html'
        })
        

          $stateProvider
        .state('gallery', {
            //  Posts state. This state will contain nested views
            url: '/gallery',
            templateUrl: 'gallery.html'
        })

});

