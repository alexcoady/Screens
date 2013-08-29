/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var SectionTickerMessageView = Backbone.View.extend({

        tagName: "li",

        className: "ticker__message",

        template: JST['app/scripts/templates/sections/section-ticker-message.ejs'],

        initialize: function initializeFn () {

        },

        render: function renderFn () {

            var template = this.template( this.model.toJSON() );

            this.$el.html(template);
            return this;
        }

    });

    return SectionTickerMessageView;
});