/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../components/jquery/jquery',
        backbone: '../components/backbone-amd/backbone',
        underscore: '../components/underscore-amd/underscore',
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'backbone',
    'views/screen-view'
], function (Backbone, ScreenView) {
    Backbone.history.start();

    /*
    *   View helpers for logging etc
    *   TODO: Move me to a seperate file
    *   Important: Must be before any views are initiated
    */
    _.extend(Backbone.View.prototype, {

        log: function logFn() {

            console.log(arguments);
        }
    }); 

    var screenView = new ScreenView;
    screenView.render();
});