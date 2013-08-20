/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/sections/section-view',
    'models/twitter-user-model',

], function ($, _, Backbone, JST, SectionView, TwitterUserModel) {
    'use strict';

    var SectionTwitterView = SectionView.extend({
        
        template: JST['app/scripts/templates/sections/section-twitter.ejs'],

        initialize: function initializeFn () {

            SectionView.prototype.initialize.apply(this, arguments);
        },

        render: function renderFn () {

            // Stops render if model isn't ready yet
            // Will be rendered on model change anyway
            if ( this.model.get("statuses_count") === undefined ) return this;

            var that = SectionView.prototype.render.apply(this, arguments);

            return that;
        }

    });

    return SectionTwitterView;
});