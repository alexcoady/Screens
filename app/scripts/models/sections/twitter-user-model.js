/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var TwitterUserModel = Backbone.Model.extend({
        
        defaults: {
        },

        urlRoot: "/json",

        url: "scripts/json/example-twitter.json",

        initialize: function initializeFn () {

        }

    });

    return TwitterUserModel;
});