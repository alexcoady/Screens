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
        },
        d3: {
            exports: 'd3'
        }
    },
    paths: {
        jquery: '../components/jquery/jquery',
        backbone: '../components/backbone-amd/backbone',
        underscore: '../components/underscore-amd/underscore',
        d3: '../components/d3/d3',
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