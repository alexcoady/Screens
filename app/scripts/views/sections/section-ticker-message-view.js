/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var SectionTickerMessageView = Backbone.View.extend({

        template: JST['app/scripts/templates/section-ticker-message.ejs'],

        intialize: function initializeFn () {

        	
        },

        render: function renderFn () {

        	var template = this.template( this.model.toJSON() );
        	this.$el.html(template);
        	return this;
        }

    });

    return SectionTickerMessageView;
});