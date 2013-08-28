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
        },

        addCommas: function addCommasFn(nStr) {
            nStr += '';
            x = nStr.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        }
    });

    var screenView = new ScreenView;
    screenView.render();
});